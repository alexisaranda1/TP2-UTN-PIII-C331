const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Marca = sequelize.define(
  "Marca",
  {
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
  },
  {
    timestamps: true, // Activar timestamps
    createdAt: "createAt", // Mapear a tu nombre actual
    updatedAt: "updateAt", // Mapear a tu nombre actual
    tableName: "marca",
  }
);


module.exports = Marca;
