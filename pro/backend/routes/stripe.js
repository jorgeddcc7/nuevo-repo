const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

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