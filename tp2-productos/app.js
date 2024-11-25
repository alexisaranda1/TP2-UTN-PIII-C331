const express = require("express")
const cors = require("cors")
// para diferenctes sistemas operativos
const path = require("path")
const sequelize = require("./data/db")

// Importar las rutas de la API
const marcaRoutes = require('./routes/marcaRoutes')// autor
const productoRoutes = require('./routes/productoRoutes')// libro
// Crear la instancia de Express
const app = express()

// Habilitar CORS y el parseo de JSON
app.use(cors())
app.use(express.json())

// Configuración de vistas (EJS)
app.set("views", path.join(__dirname, "views"))  // Definir la carpeta 'views' como la ubicación de las vistas
app.set("view engine", "ejs")  // Establecer EJS como motor de plantillas para renderizar contenido dinámico

// Middleware para servir archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")))

// Rutas de la API
app.use('/api/marcas', marcaRoutes)  // Ruta para manejar las marcas en la API
app.use('/api/productos', productoRoutes) // Ruta para manejar los productos en la API

// Rutas adicionales para la aplicación con vistas
const mainRouter = require("./routes/mainRouter.js") // Ruta principal
const categoriasRouter = require("./routes/categoriasRouter.js") // Ruta para categorías


app.use("/", mainRouter);  // Ruta para la página principal
app.use("/categorias", categoriasRouter);  // Ruta para las categorías

// Iniciar el servidor y conectar con la base de datos
const port = 3001;
app.listen(port, async () => {
  try {
    await sequelize.authenticate();  // Verificar la conexión a la base de datos
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }

  console.log(`Servidor corriendo en el puerto ${port}`);
});
