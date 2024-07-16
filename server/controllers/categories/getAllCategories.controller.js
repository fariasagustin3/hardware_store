import { Category } from "../../models/Category.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
