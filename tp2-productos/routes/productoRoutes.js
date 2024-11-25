const express = require('express');
const router = express.Router();

// Importamos el controlador de Producto
const {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productoController');

// Crear un nuevo producto
router.post('/', crearProducto);

// Obtener todos los productos
router.get('/', obtenerProductos);

// Obtener un producto por ID
router.get('/:id', obtenerProductoPorId);

// Actualizar un producto por ID
router.put('/:id', actualizarProducto);

// Eliminar un producto por ID
router.delete('/:id', eliminarProducto);

module.exports = router;
