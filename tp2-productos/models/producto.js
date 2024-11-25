const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");
const Marca = require("./marca"); // Importamos el modelo Marca

const Producto = sequelize.define("Producto", {
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
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(50)
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active'
  },
  marcaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Marca,
      key: 'id'
    }
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
  tableName: 'productos'
});

// Definimos la relación de uno a muchos (1:N) entre Producto y Marca
Producto.belongsTo(Marca, { foreignKey: 'marcaId' });
Marca.hasMany(Producto, { foreignKey: 'marcaId' });

module.exports = Producto;
