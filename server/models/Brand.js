import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const Brand = sequelize.define('Brand', {
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
    required: true
  },
}, {
  timestamps: true,
});
