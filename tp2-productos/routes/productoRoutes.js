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


/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene una lista de todos los productos.
 *     description: Devuelve una lista de productos sin aplicar filtros.
 *     responses:
 *       200:
 *         description: Lista de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *                   precio:
 *                     type: number
 *                     format: float
 *                   categoria:
 *                     type: string
 *                   estado:
 *                     type: string
 *                   imagen:
 *                     type: string
 *                   marcaId:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/', obtenerProductos);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     description: Permite crear un nuevo producto en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Notebook Dell Inspiron 15"
 *               descripcion:
 *                 type: string
 *                 example: "Portátil con procesador Intel Core i5, 8GB RAM y SSD de 256GB."
 *               imagen:
 *                 type: string
 *                 format: uri
 *                 example: "https://acdn.mitiendanube.com/stores/001/160/892/products/1650391931_71jrnwixkbs-_ac_sl1500_1-4a28cf58bde866e7cc16891099493441-640-0.jpg"
 *               precio:
 *                 type: number
 *                 format: float
 *                 example: 749.99
 *               categoria:
 *                 type: string
 *                 example: "Computadoras"
 *               estado:
 *                 type: string
 *                 enum: [activo, inactivo]
 *                 example: "activo"
 *               marcaId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 nombre:
 *                   type: string
 *                   example: "Notebook Dell Inspiron 15"
 *                 descripcion:
 *                   type: string
 *                   example: "Portátil con procesador Intel Core i5, 8GB RAM y SSD de 256GB."
 *                 imagen:
 *                   type: string
 *                   format: uri
 *                   example: "https://acdn.mitiendanube.com/stores/001/160/892/products/1650391931_71jrnwixkbs-_ac_sl1500_1-4a28cf58bde866e7cc16891099493441-640-0.jpg"
 *                 precio:
 *                   type: number
 *                   format: float
 *                   example: 749.99
 *                 categoria:
 *                   type: string
 *                   example: "Computadoras"
 *                 estado:
 *                   type: string
 *                   enum: [activo, inactivo]
 *                   example: "activo"
 *                 marcaId:
 *                   type: integer
 *                   example: 2
 *                 createAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-26T00:36:19.000Z"
 *                 updateAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-26T03:43:11.000Z"
 */
router.post('/', crearProducto);


/**
 * @swagger
 * /productos/filtro:
 *   get:
 *     summary: Obtener todos los productos con filtros, orden y paginación
 *     description: Devuelve una lista de productos de acuerdo a los filtros, orden y paginación especificados. Si no se especifican, se devuelve la lista completa.
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
 *         description: Columna por la cual ordenar los resultados (por defecto, `createAt`).
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *           example: "Galaxy S21"
 *         description: Filtrar por nombre del producto (coincidencia parcial).
 *       - in: query
 *         name: descripcion
 *         schema:
 *           type: string
 *           example: "móvil"
 *         description: Filtrar por descripción del producto (coincidencia parcial).
 *       - in: query
 *         name: categoria
 *         schema:
 *           type: string
 *           enum: [Electrónica, Muebles, Ropa, Alimentos]
 *           example: "Electrónica"
 *         description: Filtrar por categoría del producto.
 *       - in: query
 *         name: precioMin
 *         schema:
 *           type: number
 *           format: float
 *           example: 100.00
 *         description: Precio mínimo para filtrar productos.
 *       - in: query
 *         name: precioMax
 *         schema:
 *           type: number
 *           format: float
 *           example: 1000.00
 *         description: Precio máximo para filtrar productos.
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
 *         description: Filtrar por estado activo del producto.
 *       - in: query
 *         name: ids
 *         schema:
 *           type: string
 *           example: "101,102,103"
 *         description: Filtrar por un conjunto de IDs separados por comas.
 *     responses:
 *       200:
 *         description: Lista de productos filtrados y ordenados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 150
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 totalPages:
 *                   type: integer
 *                   example: 15
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 101
 *                       nombre:
 *                         type: string
 *                         example: "Galaxy S21"
 *                       descripcion:
 *                         type: string
 *                         example: "Teléfono móvil de última generación."
 *                       categoria:
 *                         type: string
 *                         example: "Electrónica"
 *                       precio:
 *                         type: number
 *                         format: float
 *                         example: 799.99
 *                       createAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-25T17:49:44.000Z"
 *                       updateAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-25T17:49:44.000Z"
 */



router.get('/filtro/', obtenerProductos);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     description: Devuelve un producto específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 nombre:
 *                   type: string
 *                   example: "Notebook Dell Inspiron 15"
 *                 descripcion:
 *                   type: string
 *                   example: "Portátil con procesador Intel Core i5, 8GB RAM y SSD de 256GB."
 *                 imagen:
 *                   type: string
 *                   format: uri
 *                   example: "https://acdn.mitiendanube.com/stores/001/160/892/products/1650391931_71jrnwixkbs-_ac_sl1500_1-4a28cf58bde866e7cc16891099493441-640-0.jpg"
 *                 precio:
 *                   type: number
 *                   format: float
 *                   example: 749.99
 *                 categoria:
 *                   type: string
 *                   example: "Computadoras"
 *                 estado:
 *                   type: string
 *                   enum: [activo, inactivo]
 *                   example: "activo"
 *                 marcaId:
 *                   type: integer
 *                   example: 2
 *                 createAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-26T00:36:19.000Z"
 *                 updateAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-11-26T03:43:11.000Z"
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', obtenerProductoPorId);

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     description: Permite actualizar la información de un producto específico por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del producto a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Notebook Dell Inspiron 15"
 *               descripcion:
 *                 type: string
 *                 example: "Portátil con procesador Intel Core i5, 8GB RAM y SSD de 256GB."
 *               imagen:
 *                 type: string
 *                 format: uri
 *                 example: "https://acdn.mitiendanube.com/stores/001/160/892/products/1650391931_71jrnwixkbs-_ac_sl1500_1-4a28cf58bde866e7cc16891099493441-640-0.jpg"
 *               precio:
 *                 type: number
 *                 format: float
 *                 example: 749.99
 *               categoria:
 *                 type: string
 *                 example: "Computadoras"
 *               estado:
 *                 type: string
 *                 enum: [activo, inactivo]
 *                 example: "activo"
 *               marcaId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto actualizado"
 *       404:
 *         description: Producto no encontrado
 */
router.put('/:id', actualizarProducto);

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     description: Elimina un producto específico de la base de datos utilizando su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del producto a eliminar
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto eliminado correctamente."
 *       404:
 *         description: Producto no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Producto no encontrado."
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al eliminar el producto. Inténtelo de nuevo más tarde."
 */
router.delete('/:id', eliminarProducto);


module.exports = router;
