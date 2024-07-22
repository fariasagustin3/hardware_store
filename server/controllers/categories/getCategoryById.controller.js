const { Category } = require("../../models/Category.js");

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.params.id } });
    if(!category) {
      return res.status(404).json({ message: "Category not found" });
    } else {
      return res.status(200).json(category)
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getCategoryById
}
