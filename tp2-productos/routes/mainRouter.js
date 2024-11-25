const express = require('express');
const router = express.Router();

// Definir rutas
// Ruta de ejemplo: obtén un mensaje de bienvenida
router.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de productos!');
});

// Puedes agregar más rutas aquí. Por ejemplo, si tienes rutas para productos
// router.get('/productos', (req, res) => {
//   res.send('Lista de productos');
// });

// Exportar el router para usarlo en app.js
module.exports = router;
