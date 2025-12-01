const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// 💰 WEBHOOK ENDPOINT: POST /api/stripe/webhook
// Nota: Usamos 'router.post' y la ruta relativa '/webhook'
router.post(
    '/webhook', 
    // Middleware para obtener el cuerpo CRUDO (Buffer) de la solicitud de Stripe, SOLO para esta ruta
    express.raw({ type: 'application/json' }), 
    async (req, res) => {
        const sig = req.headers['stripe-signature'];
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        let event;

        try {
            // Verificación de la firma con el cuerpo crudo (req.body)
            event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
        } catch (err) {
            console.error('❌ Error verificando firma del webhook:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        try {
            const eventData = event.data.object;

            switch (event.type) {
                
                case 'invoice.paid':
                    // Activación de la suscripción (pago inicial y renovaciones)
                    const invoice = eventData;
                    const subscriptionId = invoice.subscription;
                    
                    if (subscriptionId) {
                        // Buscamos al usuario por el ID de suscripción (o customerId si lo tuviéramos)
                        const user = await User.findOneAndUpdate(
                            { subscriptionId: subscriptionId }, 
                            { 
                              pro: true, 
                              subscriptionStatus: 'active' 
                            }, 
                            { new: true }
                        );
                        
                        // Si no se encuentra por subscriptionId (caso de primera compra), buscamos por customerId
                        if (!user && invoice.customer) {
                            await User.findOneAndUpdate(
                                { stripeCustomerId: invoice.customer }, 
                                { 
                                  pro: true, 
                                subscriptionId: subscriptionId, // Guardamos el ID de la subscripción aquí
                                  subscriptionStatus: 'active' 
                                }
                          );
                            console.log(`✅ [PRO] Usuario activado (VÍA CUSTOMER). Sub ID: ${subscriptionId}`);
                        } else if (user) {
                            console.log(`✅ [PRO] Usuario ${user.email} RENOVADO. Sub ID: ${subscriptionId}`);
                        }
                    }
                    break;
                
                case 'customer.subscription.deleted':
                case 'invoice.payment_failed': // Manejar fallos de pago o cancelación
                    const data = eventData;
                    const subId = data.subscription || data.id; // Puede venir de Subscription o Invoice

                    if (subId) {
                        await User.findOneAndUpdate(
                            { subscriptionId: subId }, 
                            { pro: false, subscriptionId: null, subscriptionStatus: data.status || 'failed' }
                        );
                        console.log(`❌ [NO PRO] Suscripción ${subId} cancelada/fallida. Estado: ${data.status || 'failed'}`);
                    }
                    break;
                    
                default:
                    // console.log(`ℹ️ Evento no manejado: ${event.type}`); // Descomentar para debug
                    break;
            }

            res.json({ received: true });
        } catch (err) {
            console.error('🔥 Error procesando webhook:', err);
            // Siempre respondemos 200 a Stripe para evitar que sigan reintentando eventos.
            res.status(200).json({ error: 'Internal Error but received' }); 
        }
    }
);

// Crear Checkout Session (suscripciones)
router.post('/create-checkout-session', authMiddleware, async (req, res) => {
  try {
    const domain = process.env.FRONTEND_URL || 'https://calculaincoterms.es';
    const { plan } = req.body; 

    // Validar y asignar priceId
    const priceMap = {
      mensual: process.env.STRIPE_PRICE_PRO_MENSUAL,
      trimestral: process.env.STRIPE_PRICE_PRO_TRIMESTRAL,
      anual: process.env.STRIPE_PRICE_PRO_ANUAL
    };

    const priceId = priceMap[plan];
    if (!priceId) {
      return res.status(400).json({ error: 'Plan no válido' });
    }

    let customerId = req.user.stripeCustomerId;

    // Si el usuario no tiene customerId, crearlo y guardarlo
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: req.user.email,
        metadata: { userId: req.user._id.toString() }
      });

      customerId = customer.id;
      req.user.stripeCustomerId = customer.id;
      await req.user.save();
    }

    // Crear Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${domain}/pro?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/pro?checkout=cancel`,
      // La metadata es crucial para enlazar la sesión de vuelta al usuario
      metadata: { userId: req.user._id.toString(), plan }
    });

    return res.json({ url: session.url });

  } catch (err) {
    console.error("❌ Error creando sesión Stripe:", err);
    return res.status(500).json({ error: 'No se pudo crear la sesión' });
  }
});

module.exports = router;