const Producto = require("../models/producto");
const Marca = require("../models/marca");

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, tipo, status, marcaId } = req.body;
    const producto = await Producto.create({ nombre, descripcion, precio, tipo, status, marcaId });
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por ID
const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto por ID
const actualizarProducto = async (req, res) => {
  try {
    
    const producto = await Producto.findByPk(req.params.id);
    console.log('Producto encontrado:', producto); // Agregar esto para depurar

    if (producto) {
      const { nombre, descripcion, precio, stock } = req.body;
      await producto.update({ nombre, descripcion, precio, stock });
      res.status(200).json({ message: 'Producto actualizado', producto });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un producto por ID
const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (producto) {
      await producto.destroy();
      res.status(200).json({ message: "Producto eliminado" });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearProducto, obtenerProductos, obtenerProductoPorId,actualizarProducto ,eliminarProducto };
