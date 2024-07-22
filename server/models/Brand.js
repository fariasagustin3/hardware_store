const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connection.js");

const Brand = sequelize.define('Brand', {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  products: {
    type: DataTypes.INTEGER,
    required: true,
  },
  logo: {
    type: DataTypes.STRING,
    required: true,
  },
  image: {
    type: DataTypes.STRING,
    required: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    required: true
  },
}, {
  timestamps: true,
});

module.exports = {
  Brand
}
