const { Op } = require("sequelize");
const Producto = require("../models/producto");
const Marca = require("../models/marca");


const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria,imagen, estado, marcaId } = req.body;


    const producto = await Producto.create({
      nombre,
      descripcion,
      precio,
      categoria,
      imagen,
      estado,
      marcaId,
    });

    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenerProductos = async (req, res) => {
  try {
    const { categoria, estado, precioMin, precioMax, ids, orden } = req.query;

    const where = {};

    // Filtrar por categoría
    if (categoria) {
      where.categoria = categoria;
    }

    // Filtrar por estado
    if (estado) {
      where.estado = estado;
    }

    // Filtrar por rango de precio
    if (precioMin || precioMax) {
      where.precio = {};
      if (precioMin) {
        where.precio[Op.gte] = parseFloat(precioMin); // Precio mínimo
      }
      if (precioMax) {
        where.precio[Op.lte] = parseFloat(precioMax); // Precio máximo
      }
    }

    // Filtrar por IDs específicas
    if (ids) {
      where.id = {
        [Op.in]: ids.split(',').map(id => parseInt(id)), // Convertir IDs a un array de enteros
      };
    }

    // Configurar opciones de orden
    const order = [];
    if (orden) {
      const [campo, direccion] = orden.split(':');
      order.push([campo, direccion.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']);
    }

    // Buscar productos en la base de datos
    const productos = await Producto.findAll({
      where,
      order,
    });

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

    // Verificar si el producto existe
    if (producto) {
      const { nombre, descripcion, precio, categoria,imagen, estado, marcaId } = req.body;

      // Verificar si faltan datos importantes
      if (!nombre && !descripcion && !precio && !categoria && !imagen && !estado && !marcaId) {
        return res.status(400).json({ error: "No se enviaron datos para actualizar" });
      }

      // Actualizar el producto
      await producto.update({
        nombre,
        descripcion,
        precio,
        categoria,
        imagen,
        estado,
        marcaId
      });

      res.status(200).json({ message: 'Producto actualizado', producto });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
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

module.exports = { crearProducto, obtenerProductos, obtenerProductoPorId, actualizarProducto, eliminarProducto };
