const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('productosdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;
