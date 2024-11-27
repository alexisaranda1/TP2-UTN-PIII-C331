const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");
const Marca = require("./marca");

const Producto = sequelize.define("Producto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  imagen: {
    type: DataTypes.STRING(255),
    allowNull: true, // Permitir valores nulos explícitamente
  },
  
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categoria: { // Asegúrate de que no tenga tildes
    type: DataTypes.STRING(50),
  },
  estado: {
    type: DataTypes.ENUM("activo", "inactivo"),
    defaultValue: "activo",
  },
  marcaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Marca,
      key: "id",
    },
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updateAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: "producto",
});

Producto.belongsTo(Marca, { foreignKey: "marcaId" });
Marca.hasMany(Producto, { foreignKey: "marcaId" });

module.exports = Producto;
