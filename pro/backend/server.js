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

app.post(
    '/api/stripe/webhook', // 🚨 CORREGIDO: Usamos app.post y la ruta completa
    express.raw({ type: 'application/json' }), 
    async (req, res) => {
        // En este punto, req.body es el Buffer crudo, necesario para verificar la firma
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
            // Si la verificación es exitosa, event.data.object ya está parseado
            const eventData = event.data.object;

            switch (event.type) {
                
                case 'invoice.paid':
                    // Activación/Renovación de la suscripción
                    const invoice = eventData;
                    const subscriptionId = invoice.subscription;
                    
                    if (subscriptionId) {
                        // Buscamos al usuario por subscriptionId o customerId 
                        const user = await User.findOneAndUpdate(
                            { $or: [{ subscriptionId: subscriptionId }, { stripeCustomerId: invoice.customer }] }, 
                            { pro: true, subscriptionId: subscriptionId, subscriptionStatus: 'active' }, 
                            { new: true }
                        );
                        if (user) {
                            console.log(`✅ [PRO] Usuario ${user.email} ACTIVADO/RENOVADO. Sub ID: ${subscriptionId}`);
                        } else {
                            console.log(`⚠️ Usuario no encontrado para Customer ID: ${invoice.customer} o Sub ID: ${subscriptionId}.`);
                        }
                    }
                    break;
                
                case 'customer.subscription.deleted':
                case 'invoice.payment_failed': 
                    // Manejar fallos de pago o cancelación
                    const data = eventData;
                    const subId = data.subscription || data.id; 

                    if (subId) {
                        await User.findOneAndUpdate(
                            { subscriptionId: subId }, 
                            { pro: false, subscriptionId: null, subscriptionStatus: data.status || 'failed' }
                        );
                        console.log(`❌ [NO PRO] Suscripción ${subId} cancelada/fallida. Estado: ${data.status || 'failed'}`);
                    }
                    break;
                    
                default:
                    break;
            }

            res.json({ received: true });
        } catch (err) {
            console.error('🔥 Error procesando webhook:', err);
            // Siempre respondemos 200 OK para evitar reintentos, pero loguea el error
            res.status(200).json({ error: 'Internal Error but received' }); 
        }
    }
);

// Resto del middleware
app.use(cors({ origin: 'https://calculaincoterms.es' }));
app.use(express.json()); // Middleware global para JSON (usado por todas las rutas excepto el webhook)

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Rutas normales
app.use('/api', authRoutes);
app.use('/api/stripe', stripeRoutes); // Monta el router de Stripe aquí

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});