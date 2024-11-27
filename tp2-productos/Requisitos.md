<img src="assets/utn_logo.svg" width="150">
<br/>
<br/>

# Trabajo Práctico Parte 2 — Node.js Express

## Objetivo

El objetivo de este trabajo práctico es que los estudiantes desarrollen una API utilizando Node.js, Express, MySQL y Sequelize, demostrando sus conocimientos en el manejo del backend, estructura de proyectos y operaciones CRUD.

Se valorará la organización del código, el uso de buenas prácticas y la implementación de funcionalidades adicionales especificadas.
<br/>
<br/>

## Requisitos

### **Stack Tecnológico Obligatorio**

- Node.js
- Express.js
- MySQL
- Sequelize ORM

**Opcional:** Puede incluir otras herramientas y librerías (como Dotenv, Postman para probar la API, etc.).
<br/>
<br/>

## Desarrollo del trabajo práctico

- Se deberá clonar o "forkear" este repositorio para poder modificarlo y completarlo con la resolución del proyecto.
- Una vez que su código esté listo, suba el código a un repositorio público propio y envíenos el enlace a dicho repositorio para que lo revisemos.
  <br/>
  <br/>

## Trabajo Práctico

**Crear una API temática libre**

Elija un tema para su API.
Ejemplo: una biblioteca digital, gestión de películas, catálogo de productos, etc.

<br/>

**Estructura de Carpetas**

Organice el proyecto respetando esta estructura básica:

src/<br/>
├── controllers/<br/>
├── models/<br/>
├── routes/<br/>
├── data/<br/>
└── app.js<br/>

## Detalles

**Base de Datos**

Se debe realizar la conexión con una base de datos **MySQL**.

<br/>

**Modelos**

Necesitará construir los siguientes Modelos:

<br/>

- Un modelo que represente una entidad principal de su temática **Minimo 6 propiedades**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - `id` (autoincremental)
  > - `createdAt` (fecha de creación, automática)
  > - `updatedAt` (fecha de actualización, automática)
  > - `type/categorie` (campo tipo o categoría, personalizado)
  > - `status` (mínimo 2 opciones: `active`, `inactive`)
  > - 1 propiedad adicional (de acuerdo al tema elegido).

<br/>
<br/>

- Un modelo para manejar autores **Minimo 5 propiedades**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - `id` (autoincremental)
  > - `createdAt` (fecha de creación, automática)
  > - `updatedAt` (fecha de actualización, automática)
  > - `name` (nombre del autor)
  > - `surname` (apellido del autor)

<br/>
<br/>

**Rutas y Controladores**

Necesitará construir las siguientes Rutas y Controladores:

- Rutas para el Modelo Personalizado **Minimo 5 rutas**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - Crear un registro
  > - Actualizar por ID
  > - Leer todos los registros
  > - Leer un registro por ID
  > - Eliminar un registro por ID

<br/>
<br/>

- Rutas para el Modelo Autor **Minimo 4 rutas**
  <br/>

  > Deberá incluir lo siguiente:
  >
  > - Crear un autor
  > - Leer todos los autores
  > - Leer un autor por ID
  > - Eliminar un autor por ID

<br/>
<br/>

## Opcionales

**Query Params**

Incluya las siguientes funcionalidades adicionales en las rutas de **"Leer todos los registros"** para el modelo personalizado:

1. **Paginado**

   - Permita la paginación con parámetros `page` y `limit`.

2. **Ordenado por Fecha de Creación**

   - Soporte para ordenar por `createdAt` de forma ascendente (`ASC`) o descendente (`DESC`) mediante un parámetro `sort`.

3. **Filtrado por `type/categorie`**

   - Permita filtrar los registros según el valor del campo `type/categorie` utilizando un parámetro `type`.

4. **Filtrado por `status`**
   - Permita filtrar los registros según el estado (`active`, `inactive`) utilizando un parámetro `status`.

El resultado final deberia verse como: <br/>
`GET /modeloPersonalizado?page=2&limit=5&sort=DESC&type=category1&status=active`
<br/>
<br/>

**Relación Autor-Modelo Personalizado (1:N)**

1. Al crear un registro en el modelo personalizado, asócielo a un autor existente mediante su `idAutor`.

<br/>
<br/>

## **Entrega**

- Suba su código a un repositorio público en GitHub.
- Incluya un archivo `README.md` con:
  - Descripción breve de la API.
  - Instrucciones para correr el proyecto localmente.
  - Ejemplos de endpoints y cómo probarlos.
- Archivos de ejemplos(seed) en formato json de cada modelo, para cargar la DDBB

<br/>
<br/>

## **Comentarios Finales**

Un dicho común en el desarrollo es:

> "An API is just as good as its documentation"
>
> — Common saying in backend development

Por este motivo, vamos a valorar mucho este aspecto. Siéntase libre de utilizar librerías como **Swagger** para generar su documentación.

<br/>
<br/>

## **Fecha de Entrega:**

27/11
