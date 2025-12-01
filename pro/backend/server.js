require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stripe = require('stripe');  
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  

// Importar rutas
const authRoutes = require('./routes/auth');
const stripeRoutes = require('./routes/stripe');

const app = express();
const PORT = process.env.PORT || 4000;

// ⚠️ IMPORTANTE: El webhook necesita raw body ANTES de express.json()
// Por eso creamos un middleware específico SOLO para esa ruta
app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }));

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

// Webhook Stripe (único y correcto)
app.post('/api/stripe/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('❌ Error verificando firma del webhook:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log(`💰 Checkout completado para customer: ${session.customer}`);
        break;

      case 'invoice.paid':
        const invoice = event.data.object;
        console.log(`✔️ Factura pagada: ${invoice.id}`);
        break;

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        const subscription = event.data.object;
        console.log(`🔄 Suscripción actualizada: ${subscription.id}`);
        break;

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object;
        console.log(`❌ Suscripción eliminada: ${deletedSubscription.id}`);
        break;

      default:
        console.log(`ℹ️ Evento no manejado: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('🔥 Error procesando webhook:', err);
    res.status(500).json({ error: 'Error interno en webhook' });
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
