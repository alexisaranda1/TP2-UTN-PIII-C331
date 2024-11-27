const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc'); // Importa swaggerJsdoc
const swaggerUi = require('swagger-ui-express'); // Importa swaggerUi
const sequelize = require('./data/db'); // Conexión a la base de datos

// Importar las rutas
const marcaRoutes = require('./routes/marcaRoutes');
const productoRoutes = require('./routes/productoRoutes');
const mainRouter = require('./routes/mainRouter'); // Ruta para la página principal

// Configurar la documentación de Swagger
const swaggerSpec = swaggerJsdoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Productos y Marcas',
      version: '1.0.0',
      description: 'Documentación de la API de productos y marcas',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
    ],
  },
  apis: ['./routes/*.js'], // Asegúrate de que la ruta incluya productoRoutes.js y marcaRoutes.js
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Configurar vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Usar rutas
app.use('/marcas', marcaRoutes);
app.use('/productos', productoRoutes);
app.use('/', mainRouter); // Esta línea es importante para que se cargue la ruta principal

// Agregar Swagger como middleware para la documentación
app.use('/documentacion', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Iniciar el servidor
const port = 3000;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
  console.log(`Servidor corriendo en el puerto ${port}`);
});
