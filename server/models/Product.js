import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const Product = sequelize.define('Product', {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  price: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  info: {
    type: DataTypes.JSON,
    required: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    required: true
  },
  CategoryId: DataTypes.INTEGER,
  BrandId: DataTypes.INTEGER,
}, {
  timestamps: true,
});
