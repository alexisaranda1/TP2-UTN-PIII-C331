const express = require('express');
const router = express.Router();
const Producto = require('../models/producto'); // Importar el modelo de Producto
const Marca = require('../models/marca'); // Importar el modelo de Marca

// Ruta principal que obtiene productos y marcas
router.get('/', async (req, res) => {
  try {
    // Obtener todos los productos y marcas desde la base de datos
    const productos = await Producto.findAll({
      include: Marca,  // Incluir la información de la marca asociada a cada producto
    });
    
    const marcas = await Marca.findAll();  // Obtener todas las marcas

    // Pasar los productos y marcas a la vista
    res.render('main', {title: "ElectroTech", productos, marcas, nombre: 'ElectroTech' });
  } catch (error) {
    console.error('Error al obtener productos y marcas:', error);
    res.status(500).send('Error al obtener productos y marcas');
  }
});

module.exports = router;
