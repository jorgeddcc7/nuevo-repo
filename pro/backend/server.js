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