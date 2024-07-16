import { Product } from "../../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "Product edited successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
