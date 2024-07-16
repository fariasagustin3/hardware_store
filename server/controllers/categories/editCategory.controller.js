import { Category } from "../../models/Category.js";

export const editCategory = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Category edited successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};