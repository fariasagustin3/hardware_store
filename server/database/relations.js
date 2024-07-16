import { Product } from "../models/Product.js";
import { Category } from "../models/Category.js";
import { Order } from "../models/Order.js";
import { Brand } from "../models/Brand.js";

export const setupRelations = () => {
  Category.hasMany(Product);
  Product.belongsTo(Category, { foreignKey: "CategoryId" });

  Brand.hasMany(Product);
  Product.belongsTo(Brand);

  Order.belongsTo(Product);
};
