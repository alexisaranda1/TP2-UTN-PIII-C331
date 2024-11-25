const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController');

router.post('/', marcaController.crearMarca);
router.get('/', marcaController.obtenerMarcas);
router.get('/:id', marcaController.obtenerMarcaPorId);
router.delete('/:id', marcaController.eliminarMarca);

module.exports = router;
