import { Category } from "../../models/Category.js";

export const deleteCategory = async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};