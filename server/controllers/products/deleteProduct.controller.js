import { Product } from "../../models/Product.js";

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
