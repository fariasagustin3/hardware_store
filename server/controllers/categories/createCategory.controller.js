import { Category } from "../../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};