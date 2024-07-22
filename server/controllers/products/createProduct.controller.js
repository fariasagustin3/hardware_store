const { Brand } = require("../../models/Brand.js");
const { Category } = require("../../models/Category.js");
const { Product } = require("../../models/Product.js");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const category = await Category.findByPk(product.CategoryId);
    category.products += 1;
    category.save();
    if (req.body.BrandId) {
      const brand = await Brand.findByPk(product.BrandId);
      brand.products += 1;
      brand.save();
    }
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = {
  createProduct
}
