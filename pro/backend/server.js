require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stripe = require('stripe');  
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  

// Importar rutas
const authRoutes = require('./routes/auth');
const stripeRoutes = require('./routes/stripe');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 4000;

// Resto del middleware
app.use(cors({ origin: 'https://calculaincoterms.es' }));
app.use(express.json()); // <- solo después del raw del webhook

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Rutas normales
app.use('/api', authRoutes);
app.use('/api/stripe', stripeRoutes);

// Webhook Stripe (Definición CORREGIDA)
app.post(
    '/api/stripe/webhook', 
    // 1. Middleware para obtener el cuerpo CRUDO (Buffer) de la solicitud de Stripe
    express.raw({ type: 'application/json' }), 
    // 2. Función de manejo de la lógica del webhook
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
            // 💰 Manejo de eventos y actualización de la base de datos 
            const eventData = event.data.object;

            switch (event.type) {
                
                case 'checkout.session.completed':
                    // Verificar si es una sesión de suscripción y si el pago fue exitoso
                    if (eventData.mode === 'subscription' && eventData.payment_status === 'paid') {
                        const userId = eventData.metadata.userId; // ID de usuario guardado en stripe.js
                        
                        if (userId && eventData.subscription) {
                            await User.findByIdAndUpdate(userId, { 
                                pro: true, 
                                stripeSubscriptionId: eventData.subscription,
                                subscriptionStatus: 'active' 
                            });
                            console.log(`✅ [PRO] Usuario ${userId} activado. Sub ID: ${eventData.subscription}`);
                        }
                    }
                    break;
                
                case 'customer.subscription.deleted':
                case 'customer.subscription.updated':
                    // Manejar cancelaciones/cambios de estado
                    const subscription = eventData;
                    
                    if (subscription.status === 'canceled' || subscription.status === 'unpaid') {
                        // Buscar usuario por el ID de suscripción y desactivarlo
                          await User.findOneAndUpdate(
                              { stripeSubscriptionId: subscription.id }, 
                              { pro: false, stripeSubscriptionId: null, subscriptionStatus: subscription.status }
                          );
                          console.log(`❌ [NO PRO] Suscripción ${subscription.id} cancelada/inactiva.`);
                    } else if (subscription.status === 'active') {
                        // Asegurar que el estado es correcto (por ejemplo, después de un reintento de pago exitoso)
                          await User.findOneAndUpdate(
                              { stripeSubscriptionId: subscription.id }, 
                              { pro: true, subscriptionStatus: 'active' }
                          );
                          console.log(`🔄 [PRO] Suscripción ${subscription.id} activa.`);
                    }
                    break;
                    
                default:
                    console.log(`ℹ️ Evento no manejado: ${event.type}`);
            }

            res.json({ received: true });
        } catch (err) {
            console.error('🔥 Error procesando webhook:', err);
            res.status(500).json({ error: 'Error interno en webhook' });
        }
    }
);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
