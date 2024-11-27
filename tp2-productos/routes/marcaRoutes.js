const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController');


/**
 * @swagger
 * /marcas:
 *   get:
 *     summary: Obtener todas las marcas
 *     description: Devuelve una lista de todas las marcas.
 *     responses:
 *       200:
 *         description: Lista de marcas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Samsung"
 *                   descripcion:
 *                     type: string
 *                     example: "Marca líder en tecnología, especialmente en dispositivos móviles y electrodomésticos."
 *                   createAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-25T17:49:44.000Z"
 *                   updateAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-11-25T17:49:44.000Z"
 */
router.get('/', marcaController.obtenerMarcas);


/**
 * @swagger
 * /marcas:
 *   post:
 *     summary: Crear una nueva marca
 *     description: Permite crear una nueva marca en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Samsung"
 *               descripcion:
 *                 type: string
 *                 example: "Marca líder en tecnología, especialmente en dispositivos móviles y electrodomésticos."
 *     responses:
 *       201:
 *         description: Marca creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: "Samsung"
 *                 descripcion:
 *                   type: string
 *                   example: "Marca líder en tecnología, especialmente en dispositivos móviles y electrodomésticos."
 *                 createAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-25T17:49:44.000Z"
 *                 updateAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-25T17:49:44.000Z"
 */
router.post('/', marcaController.crearMarca);




/**
 * @swagger
 * /marcas/filtro:
 *   get:
 *     summary: Obtener todas las marcas con filtros, orden y paginación
 *     description: Devuelve una lista de marcas según los filtros, orden y paginación especificados(sino marcas nada trae todos).
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de página para la paginación (por defecto, 1).
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Cantidad de resultados por página (por defecto, 10).
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *           example: ASC
 *         description: Orden de los resultados (ASC o DESC, por defecto ASC).
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           example: "nombre"
 *         description: Columna por la cual ordenar los resultados (por defecto, createAt).
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *           example: "Samsung"
 *         description: Filtrar por nombre de la marca (coincidencia parcial).
 *       - in: query
 *         name: descripcion
 *         schema:
 *           type: string
 *           example: "líder"
 *         description: Filtrar por descripción de la marca (coincidencia parcial).
 *       - in: query
 *         name: fechaInicio
 *         schema:
 *           type: string
 *           format: date
 *           example: "2023-01-01"
 *         description: Fecha de inicio para filtrar por rango de creación.
 *       - in: query
 *         name: fechaFin
 *         schema:
 *           type: string
 *           format: date
 *           example: "2023-12-31"
 *         description: Fecha de fin para filtrar por rango de creación.
 *       - in: query
 *         name: activo
 *         schema:
 *           type: boolean
 *           example: true
 *         description: Filtrar por estado activo de la marca.
 *       - in: query
 *         name: ids
 *         schema:
 *           type: string
 *           example: "1,2,3"
 *         description: Filtrar por un conjunto de IDs separados por comas.
 *     responses:
 *       200:
 *         description: Lista de marcas filtradas y ordenadas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 50
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 totalPages:
 *                   type: integer
 *                   example: 5
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       nombre:
 *                         type: string
 *                         example: "Samsung"
 *                       descripcion:
 *                         type: string
 *                         example: "Marca líder en tecnología, especialmente en dispositivos móviles y electrodomésticos."
 *                       createAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-25T17:49:44.000Z"
 *                       updateAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-25T17:49:44.000Z"
 */
router.get('/filtro/', marcaController.obtenerMarcas);

/**
 * @swagger
 * /marcas/{id}:
 *   get:
 *     summary: Obtener una marca por ID
 *     description: Devuelve una marca específica por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la marca
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Marca encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nombre:
 *                   type: string
 *                   example: "Samsung"
 *                 descripcion:
 *                   type: string
 *                   example: "Marca líder en tecnología, especialmente en dispositivos móviles y electrodomésticos."
 *                 createAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-25T17:49:44.000Z"
 *                 updateAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-25T17:49:44.000Z"
 *       404:
 *         description: Marca no encontrada
 */
router.get('/:id', marcaController.obtenerMarcaPorId);

/**
 * @swagger
 * /marcas/{id}:
 *   delete:
 *     summary: Eliminar una marca
 *     description: Elimina una marca específica por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la marca a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Marca eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Marca eliminada"
 *       404:
 *         description: Marca no encontrada
 */
router.delete('/:id', marcaController.eliminarMarca);



module.exports = router;
