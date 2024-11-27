<img src="assets/utn_logo.svg" width="150">
<br/>
<br/>


## README.md

### Alumno
Alexis Aranda

### Materia
Programación III

### Profesores
Gabriel Muñoz e Ibrahim Rodríguez
<br/>
### Universidad
Universidad Tecnológica Nacional (Avellaneda)
<br/>
### Proyecto
API de Gestión de ElectroTech
<br/>
### Descripción
Esta API de backend ha sido desarrollada para gestionar la información de una tienda de electrónica llamada ElectroTech. Utiliza Node.js, Express y Sequelize para interactuar con una base de datos MySQL. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos y marcas, además de ofrecer funcionalidades avanzadas como paginación, filtrado y ordenación de registros.

### Instalación
Para instalar este proyecto, sigue estos pasos:
<br/>
1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/alexisaranda1/TP2-UTN-PIII-C331.git
   cd TP2-UTN-PIII-C331
<br/>
2. **Instalar dependencias:**

   ```bash
   npm install

<br/>
3. **Configurar la base de datos:**

   Utiliza el archivo `electroTech.sql` para crear la base de datos y probarla con los datos iniciales.
   - Abre MySQL Workbench o tu herramienta preferida de gestion de base de datos.
   - Conectate a tu servidor MySQL
   - Ejecuta el contenido del archivo `electroTech.sql` para crear la base de datos, las tablas y probarlas con los datos iniciales.
<br/>
<br/>
 4. **Iniciar el servidor:**
   ```bash
   nodemon /app.js
<br/>
<br/> 
## Documentación Swagger

Accede a la documentación de la API en formato Swagger a través del siguiente enlace:

[Documentación Swagger](http://localhost:3000/documentacion/)


## Acceso a la Vista
La aplicación tiene una vista renderizada accesible en:

- **URL**: [http://localhost:3000/](http://localhost:3000/)



# Documentación de la API de Productos y de la API de Marcas

## Endpoints Disponibles

### Crear un Producto
- **URL**: `http://localhost:3000/productos`
- **Método**: `POST`
- **Descripción**: Permite crear un nuevo producto.
- **Body** (JSON):
  ```json
  {
    "nombre": "Nombre del producto",
    "descripcion": "Descripción del producto",
    "precio": 100.50,
    "categoria": "Categoría del producto",
    "imagen": "URL de la imagen",
    "estado": "activo",
    "marcaId": 1
  }
  ```
- **Respuesta exitosa** (201):
  ```json
  {
    "id": 1,
    "nombre": "Nombre del producto",
    "descripcion": "Descripción del producto",
    "precio": 100.50,
    "categoria": "Categoría del producto",
    "imagen": "URL de la imagen",
    "estado": "activo",
    "marcaId": 1,
    "createAt": "2024-11-26T00:00:00.000Z",
    "updateAt": "2024-11-26T00:00:00.000Z"
  }
  ```

### Obtener Todos los Productos
- **URL**: `http://localhost:3000/productos`
- **Método**: `GET`
- **Descripción**: Devuelve todos los productos disponibles.
- **Respuesta exitosa** (200):
  ```json
  [
    {
      "id": 1,
      "nombre": "Producto 1",
      "descripcion": "Descripción del producto 1",
      "precio": 50.00,
      "categoria": "Categoría 1",
      "imagen": "URL",
      "estado": "activo",
      "marcaId": 1,
      "createAt": "2024-11-26T00:00:00.000Z",
      "updateAt": "2024-11-26T00:00:00.000Z"
    }
  ]
  ```

#### Parámetros de Filtro

1. **Filtro por categoría**:
   - **Ejemplo**: `http://localhost:3000/productos?categoria=electrodomésticos`
   - Devuelve los productos que coinciden con la categoría especificada.

2. **Filtro por estado**:
   - **Ejemplo**: `http://localhost:3000/productos?estado=activo`
   - Devuelve los productos que tienen el estado activo.

3. **Filtro por precio**:
   - **Ejemplo**:
     - `http://localhost:3000/productos?precioMin=50&precioMax=200`
     - Devuelve los productos con un precio entre 50 y 200.

4. **Filtro por Marca**:
   - **Ejemplo**: `http://localhost:3000/productos?marcaId=1`
   - Devuelve los productos asociados a la marca con ID 1.

5. **Búsqueda por texto en descripción**:
   - **Ejemplo**: `http://localhost:3000/productos?descripcion=tecnología`
   - Devuelve productos cuya descripción contenga la palabra "tecnología".

6. **Búsqueda por IDs específicos**:
   - **Ejemplo**: `http://localhost:3000/productos?ids=1,3,5`
   - Devuelve los productos con los IDs 1, 3 y 5.

### Obtener un Producto por ID
- **URL**: `http://localhost:3000/productos/:id`
- **Método**: `GET`
- **Descripción**: Devuelve un producto específico según su ID.
- **Respuesta exitosa** (200):
  ```json
  {
    "id": 1,
    "nombre": "Producto 1",
    "descripcion": "Descripción del producto 1",
    "precio": 50.00,
    "categoria": "Categoría 1",
    "imagen": "URL",
    "estado": "activo",
    "marcaId": 1,
    "createAt": "2024-11-26T00:00:00.000Z",
    "updateAt": "2024-11-26T00:00:00.000Z"
  }
  ```

### Actualizar un Producto
- **URL**: `http://localhost:3000/productos/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza la información de un producto existente.
- **Body** (JSON):
  ```json
  {
    "nombre": "Nuevo nombre",
    "descripcion": "Nueva descripción",
    "precio": 200.00,
    "categoria": "Nueva categoría",
    "imagen": "Nueva URL",
    "estado": "inactivo",
    "marcaId": 2
  }
  ```
- **Respuesta exitosa** (200):
  ```json
  {
    "message": "Producto actualizado",
    "producto": {
      "id": 1,
      "nombre": "Nuevo nombre",
      "descripcion": "Nueva descripción",
      "precio": 200.00,
      "categoria": "Nueva categoría",
      "imagen": "Nueva URL",
      "estado": "inactivo",
      "marcaId": 2,
      "createAt": "2024-11-26T00:00:00.000Z",
      "updateAt": "2024-11-26T00:00:00.000Z"
    }
  }
  ```

### Eliminar un Producto
- **URL**: `http://localhost:3000/productos/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un producto según su ID.
- **Respuesta exitosa** (200):
  ```json
  {
    "message": "Producto eliminado"
  }
  ```

### Ordenar Resultados
- **Parámetro**: `orden`
  - Valores posibles: `asc` (ascendente) o `desc` (descendente).
  - Campo de ordenación: `nombre`, `precio`, `categoria`.

#### Ejemplo de uso:
1. **Orden ascendente por nombre**:
   - `http://localhost:3000/productos?orden=asc&campo=nombre`
2. **Orden descendente por precio**:
   - `http://localhost:3000/productos?orden=desc&campo=precio`

---


# Documentación de la API de Marcas

## Endpoints Disponibles

### 1. Crear una Marca
**URL:** `http://localhost:3000/marcas`  
**Método:** `POST`  
**Descripción:** Permite crear una nueva marca.

**Body (JSON):**
```json
{
  "nombre": "Nombre de la marca",
  "descripcion": "Descripción de la marca"
}
```

**Respuesta exitosa (201):**
```json
{
  "id": 1,
  "nombre": "Nombre de la marca",
  "descripcion": "Descripción de la marca",
  "createAt": "2024-11-26T00:00:00.000Z",
  "updateAt": "2024-11-26T00:00:00.000Z"
}
```

---

### 2. Obtener Todas las Marcas
**URL:** `http://localhost:3000/marcas`  
**Método:** `GET`  
**Descripción:** Devuelve todas las marcas disponibles.

**Respuesta exitosa (200):**
```json
[
  {
    "id": 1,
    "nombre": "Marca 1",
    "descripcion": "Descripción de la marca 1",
    "createAt": "2024-11-26T00:00:00.000Z",
    "updateAt": "2024-11-26T00:00:00.000Z"
  },
  {
    "id": 2,
    "nombre": "Marca 2",
    "descripcion": "Descripción de la marca 2",
    "createAt": "2024-11-26T00:00:00.000Z",
    "updateAt": "2024-11-26T00:00:00.000Z"
  }
]
```

**Parámetros de Filtro:**
- **`nombre`**: Filtra las marcas cuyo nombre contenga el valor especificado.  
  Ejemplo: `http://localhost:3000/marcas?nombre=Apple`
- **`descripcion`**: Filtra las marcas cuya descripción contenga el valor especificado.  
  Ejemplo: `http://localhost:3000/marcas?descripcion=tecnología`
- **`ids`**: Filtra las marcas cuyos IDs coincidan con los valores especificados (separados por comas).  
  Ejemplo: `/marcas?ids=1,2,3`

**Parámetros de Ordenamiento:**
- **`sort`**: Ordena los resultados. Valores posibles: `ASC` o `DESC`.  
  Ejemplo: `http://localhost:3000/marcas?sort=ASC`

**Parámetros de Paginación:**
- **`page`**: Especifica el número de página.  
  Ejemplo: `http://localhost:3000/marcas?page=2`
- **`limit`**: Especifica la cantidad de resultados por página.  
  Ejemplo: `http://localhost:3000/marcas?limit=5`

---

### 3. Obtener una Marca por ID
**URL:** `http://localhost:3000/marcas/:id`  
**Método:** `GET`  
**Descripción:** Devuelve una marca específica según su ID.

**Respuesta exitosa (200):**
```json
{
  "id": 1,
  "nombre": "Nombre de la marca",
  "descripcion": "Descripción de la marca",
  "createAt": "2024-11-26T00:00:00.000Z",
  "updateAt": "2024-11-26T00:00:00.000Z"
}
```

**Respuesta en caso de error (404):**
```json
{
  "message": "Marca no encontrada"
}
```

---

### 4. Eliminar una Marca
**URL:** `http://localhost:3000/marcas/:id`  
**Método:** `DELETE`  
**Descripción:** Elimina una marca según su ID.

**Respuesta exitosa (200):**
```json
{
  "message": "Marca eliminada"
}
```

**Respuesta en caso de error (404):**
```json
{
  "message": "Marca no encontrada"
}
```

---

### Ejemplos de Uso

1. **Filtro por nombre y orden ascendente:**
   - **URL:** `http://localhost:3000/marcas?nombre=Sony&sort=ASC`
   - **Descripción:** Devuelve marcas cuyo nombre contenga "Sony" ordenadas de forma ascendente por la fecha de creación.

2. **Paginación con orden descendente:**
   - **URL:** `http://localhost:3000/marcas?page=1&limit=2&sort=DESC`
   - **Descripción:** Devuelve las primeras 2 marcas ordenadas en orden descendente por la fecha de creación.

3. **Combinación de filtros:**
   - **URL:** `http://localhost:3000/marcas?ids=1,3&descripcion=tecnología&sort=ASC`
   - **Descripción:** Devuelve las marcas con IDs 1 y 3 cuya descripción contenga "tecnología" ordenadas de forma ascendente por la fecha de creación.





**Estructura de Carpetas**

tp2-productos/
* assets/
    * carriamarillo.png
    * carriblanco.png
    * carrito.png
    * facebook.svg
    * instagram.svg
    * linkedin.svg
    * pinterest.svg
    * utn_logo.svg
    * youtube.svg
* config/
    * swagger.js
* controllers/
    * marcaController.js
    * productoController.js
* data/
    * db.js
* models/
    * marca.js
    * producto.js
* public/
    * css/
        * signin.css
        * signUp.css
        * style.css
* routes/
    * categoriasRouter.js
    * mainRouter.js
    * marcaRoutes.js
    * productoRoutes.js
* views/
    * partials/
        * footer.ejs
        * head.ejs
        * header.ejs
        * script.ejs
    * main.ejs
* .env
* app.js
* Crearbasedatos.sql
* package-lock.json
* package.json
* Requisitos.md

