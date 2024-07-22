const { Brand } = require("../../models/Brand.js");

const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findOne({ where: { id: req.params.id } });
    if(!brand) {
      return res.status(404).json({ message: "Brand not found" });
    } else {
      return res.status(200).json(brand)
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getBrandById
}
