import { Category } from "../../models/Category.js";
import { Product } from "../../models/Product.js";

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });
    const category = await Category.findByPk(product.CategoryId);
    category.products -= 1;
    category.save();
    await Product.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
