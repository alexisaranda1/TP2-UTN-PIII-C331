// routes/categoriasRouter.js
const express = require("express");
const router = express.Router();

// Ruta de ejemplo para obtener todas las categorías
router.get("/", (req, res) => {
  res.send("Listado de categorías");
});

// Ruta de ejemplo para crear una categoría
router.post("/", (req, res) => {
  res.send("Categoría creada");
});

module.exports = router;
