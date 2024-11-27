const { Op } = require("sequelize");
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

// Obtener todas las marcasconst 
obtenerMarcas = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "ASC", nombre, descripcion, fechaInicio, fechaFin, activo, sortBy = "createAt", ids } = req.query;

    // Configuración para la paginación
    const offset = (page - 1) * limit;
    const filters = {};

    // Filtros dinámicos
    if (nombre) filters.nombre = { [Op.like]: `%${nombre}%` };
    if (descripcion) filters.descripcion = { [Op.like]: `%${descripcion}%` };
    if (fechaInicio && fechaFin) {
      filters.createAt = { [Op.between]: [new Date(fechaInicio), new Date(fechaFin)] };
    }
    if (activo !== undefined) filters.activo = { [Op.eq]: activo === 'true' };

    // Filtro para 'ids', convirtiéndolo en un array
    if (ids) {
      const idArray = ids.split(',').map(id => parseInt(id));  // Convertimos los ids en un array de números
      filters.id = { [Op.in]: idArray };
    }

    // Obtener marcas con filtros, paginación y ordenamiento
    const marcas = await Marca.findAndCountAll({
      where: filters,
      order: [[sortBy, sort.toUpperCase() === "DESC" ? "DESC" : "ASC"]],
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
    });

    // Respuesta con datos y metadata de paginación
    res.status(200).json({
      total: marcas.count,
      page: parseInt(page, 10),
      totalPages: Math.ceil(marcas.count / limit),
      data: marcas.rows,
    });
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
