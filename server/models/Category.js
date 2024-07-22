const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connection.js");

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  products: {
    type: DataTypes.INTEGER,
    required: true,
  },
  image: {
    type: DataTypes.JSON,
    required: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    required: true,
    defaultValue: true,
  },
}, {
  timestamps: true,
});

module.exports = {
  Category
}
