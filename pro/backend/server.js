require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stripe = require('stripe');  
// Inicializa Stripe con la clave secreta
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  

// Importar rutas y modelos
const authRoutes = require('./routes/auth');
const stripeRoutes = require('./routes/stripe');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 4000;

// =========================================================================
// RUTA WEBHOOK DE STRIPE
// Se usa express.raw para obtener el cuerpo crudo, necesario para la verificación de firma
app.post(
    '/api/stripe/webhook', 
    express.raw({ type: 'application/json' }), 
    async (req, res) => {
        const sig = req.headers['stripe-signature'];
        // El secreto del webhook debe coincidir con el de Stripe
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;        
        let event;

        try {
            // 1. Verificación de la firma
            event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
        } catch (err) {
            console.error('❌ Error verificando firma del webhook:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        try {
            // 2. Procesamiento del evento
            const eventData = event.data.object;

            switch (event.type) {

                // =========================================================================
                // 🚨 CASO CRÍTICO: MANEJAR LA PRIMERA COMPRA 🚨
                case 'checkout.session.completed':
                    const session = eventData;
                    // El email del usuario es la clave de búsqueda en este punto
                    const customerEmail = session.customer_details?.email; 
                    const subscriptionId = session.subscription;
                    const customerId = session.customer;
                    
                    if (subscriptionId && customerEmail) {
                        // Buscamos al usuario por su email de registro y actualizamos todos los campos Stripe
                        const user = await User.findOneAndUpdate(
                            { email: customerEmail }, 
                            { 
                                pro: true, 
                                stripeCustomerId: customerId, 
                                subscriptionId: subscriptionId, 
                                subscriptionStatus: 'active'
                            }, 
                            { new: true }
                        );

                        if (user) {
                            console.log(`✅ [PRO] Checkout completado. Usuario ${user.email} activado y IDs Stripe guardados.`);
                        } else {
                            // Advertencia: El usuario pagó pero no existe en nuestra DB.
                            console.warn(`⚠️ [WEBHOOK] Checkout completado, pero NO se encontró usuario para email: ${customerEmail}.`);
                        }
                    }
                    break;
                // =========================================================================

                case 'invoice.paid':
                    // Activación/Renovación de la suscripción (usado en renovaciones y algunos pagos iniciales)
                    const invoice = eventData;
                    const subscriptionIdInvoice = invoice.subscription;
                    
                    if (subscriptionIdInvoice) {
                        // Buscamos al usuario por subscriptionId (si ya existe) o customerId
                        const user = await User.findOneAndUpdate(
                            { $or: [{ subscriptionId: subscriptionIdInvoice }, { stripeCustomerId: invoice.customer }] }, 
                            { pro: true, subscriptionId: subscriptionIdInvoice, subscriptionStatus: 'active' }, 
                            { new: true }
                        );
                        if (user) {
                            console.log(`✅ [PRO] Usuario ${user.email} ACTIVADO/RENOVADO. Sub ID: ${subscriptionIdInvoice}`);
                        } else {
                            console.log(`⚠️ Usuario no encontrado para Customer ID: ${invoice.customer} o Sub ID: ${subscriptionIdInvoice}.`);
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
                    // Ignorar eventos no manejados
                    break;
            }

            // 3. Respuesta exitosa a Stripe (200 OK)
            res.json({ received: true });
        } catch (err) {
            console.error('🔥 Error procesando webhook:', err);
            // Siempre respondemos 200 OK si es un error interno para evitar reintentos de Stripe
            res.status(200).json({ error: 'Internal Error but received' }); 
        }
    }
);

// Resto del middleware
app.use(cors({ origin: 'https://calculaincoterms.es' }));
app.use(express.json()); // Middleware global para JSON (usado por todas las rutas excepto el webhook)

// Rutas normales
app.use('/api', authRoutes);
app.use('/api/stripe', stripeRoutes); 

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando 🚀');
});


// =========================================================================
// FUNCIÓN PARA CONECTAR DB E INICIAR EL SERVIDOR (Para evitar timeouts)
// Esto garantiza que el servidor NO escuche hasta que la DB esté conectada.
async function startServer() {
    try {
        // Conexión a MongoDB y espera hasta que esté lista
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('✅ Conectado a MongoDB');

        // Iniciar servidor SOLO si la conexión a la DB fue exitosa
        app.listen(PORT, () => {
            console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
        });

    } catch (err) {
        // Esto atrapará errores de conexión, incluyendo fallos de IP Whitelist o URI
        console.error('❌ FATAL: Error conectando a MongoDB. Verifique URI y IP Whitelist:', err.message);
    }
}

// Llamamos a la función de inicio
startServer();