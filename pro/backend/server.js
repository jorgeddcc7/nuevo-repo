require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stripe = require('stripe');  // Asegúrate de importar Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  // Instanciar Stripe

// Importar rutas
const authRoutes = require('./routes/auth');
const stripeRoutes = require('./routes/stripe');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: 'https://calculaincoterms.es' }));
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Rutas
app.use('/api', authRoutes);
app.use('/api/stripe', stripeRoutes);

// Ruta para los webhooks de Stripe con express.raw para manejar el contenido crudo
app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;

  try {
    // Usamos stripe.webhooks.constructEvent() para procesar el webhook
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Procesar los eventos aquí
  try {
    switch (event.type) {
      case 'checkout.session.completed':
        // Lógica cuando la sesión de checkout se completa
        const session = event.data.object;
        console.log(`Pago completado para el cliente: ${session.customer}`);
        // Aquí puedes marcar como PRO al usuario, actualizar la suscripción, etc.
        break;

      case 'invoice.paid':
        // Lógica cuando una factura es pagada
        const invoice = event.data.object;
        console.log(`Factura pagada: ${invoice.id}`);
        // Aquí puedes actualizar el estado del usuario a 'PRO' si la factura es válida
        break;

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        // Lógica cuando la suscripción es creada o actualizada
        const subscription = event.data.object;
        console.log(`Suscripción de usuario actualizada: ${subscription.id}`);
        // Aquí puedes actualizar el estado de la suscripción en tu base de datos
        break;

      case 'customer.subscription.deleted':
        // Lógica cuando la suscripción es eliminada
        const deletedSubscription = event.data.object;
        console.log(`Suscripción eliminada para el usuario: ${deletedSubscription.id}`);
        // Aquí puedes actualizar el estado del usuario a 'canceled'
        break;

      default:
        console.log(`Evento no manejado: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Error manejando el webhook', err);
    res.status(500).json({ error: 'Error interno en webhook' });
  }
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
