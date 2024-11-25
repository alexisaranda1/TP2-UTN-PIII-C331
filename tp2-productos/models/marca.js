const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Marca = sequelize.define("Marca", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updateAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'marcas'
});

module.exports = Marca;
