const express = require('express');
const router = express.Router();

// Endpoint mínimo para mantener el servidor despierto
router.get('/ping', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: Date.now() });
});

module.exports = router;