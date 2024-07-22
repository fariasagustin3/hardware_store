const { Product } = require("../models/Product.js");
const { Category } = require("../models/Category.js");
const { Order } = require("../models/Order.js");
const { Brand } = require("../models/Brand.js");

const setupRelations = () => {
  Category.hasMany(Product);
  Product.belongsTo(Category, { foreignKey: "CategoryId" });

  Brand.hasMany(Product);
  Product.belongsTo(Brand);

  Order.belongsTo(Product);
};

module.exports = {
  setupRelations
}
