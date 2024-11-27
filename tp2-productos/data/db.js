require('dotenv').config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,       
  process.env.DB_PASSWORD,   
  {
    host: process.env.DB_HOST,  
    dialect: process.env.DB_DIALECT, 
    port: 3306, 
    logging: console.log, 
  }
);

module.exports = sequelize;
