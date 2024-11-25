const Marca = require("../models/marca");

// Crear una nueva marca
const crearMarca = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const marca = await Marca.create({ nombre, descripcion });
    res.status(201).json(marca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las marcas
const obtenerMarcas = async (req, res) => {
  try {
    const marcas = await Marca.findAll();
    res.status(200).json(marcas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una marca por ID
const obtenerMarcaPorId = async (req, res) => {
  try {
    const marca = await Marca.findByPk(req.params.id);
    if (marca) {
      res.status(200).json(marca);
    } else {
      res.status(404).json({ error: "Marca no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Eliminar una marca por ID
const eliminarMarca = async (req, res) => {
  try {
    const marca = await Marca.findByPk(req.params.id);
    console.log('Marca encontrada:', marca);  // Depuración: Ver qué marca se está obteniendo
    if (marca) {
      await marca.destroy();
      res.status(200).json({ message: "Marca eliminada", id: req.params.id });
    } else {
      res.status(404).json({ 
        error: "Marca no encontrada", 
        id: req.params.id  // Incluir ID en la respuesta para depuración
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearMarca, obtenerMarcas, obtenerMarcaPorId, eliminarMarca };
