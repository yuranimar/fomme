const express = require('express');
const router = express.Router();
const db = require('../db');

// Simulación de sesión (reemplaza con session real)
const artesanoId = 1;

router.get('/mis-productos', (req, res) => {
  db.query('SELECT * FROM productos WHERE artesano_id = ?', [artesanoId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener productos' });
    res.json(results);
  });
});

module.exports = router;