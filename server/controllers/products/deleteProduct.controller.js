const { Brand } = require("../../models/Brand.js");
const { Category } = require("../../models/Category.js");
const { Product } = require("../../models/Product.js");

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });
    const category = await Category.findByPk(product.CategoryId);
    const brand = await Brand.findByPk(product.BrandId);
    category.products -= 1;
    brand.products -= 1;
    category.save();
    brand.save();
    await Product.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = {
  deleteProduct
}
