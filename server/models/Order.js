const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connection.js");

const Order = sequelize.define(
  "Order",
  {
    fullName: {
      type: DataTypes.STRING,
      required: true,
    },
    // products: {
    //   type: DataTypes.ARRAY(DataTypes.JSON),
    //   required: true,
    // },
    status: {
      type: DataTypes.ENUM("active", "pending", "completed", "rejected"),
      defaultValue: "active",
      required: true,
    },
    ProductId: DataTypes.ARRAY(DataTypes.INTEGER),
  },
  {
    timestamps: true,
  }
);

module.exports = {
  Order
}
