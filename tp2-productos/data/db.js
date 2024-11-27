require('dotenv').config();
const { Sequelize } = require("sequelize");

const nombreDb = process.env.DB_NAME;
const usuarioDb = process.env.DB_USER;
const passwordDb = process.env.DB_PASSWORD;
const hostDb = process.env.DB_HOST;
const dialectDb = process.env.DB_DIALECT;

const sequelize = new Sequelize(nombreDb, usuarioDb, passwordDb, {
  host: hostDb,
  dialect: dialectDb,
  port: 3306,
  logging: console.log,
});

module.exports = sequelize;
