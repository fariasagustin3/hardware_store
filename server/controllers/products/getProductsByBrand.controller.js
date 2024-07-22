const { Product } = require("../../models/Product.js");

const getProductsByBrand = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { BrandId: req.params.brandId } });
    if(!products) {
      return res.status(404).json({ message: "Products not found" });
    } else {
      return res.status(200).json(products)
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getProductsByBrand
}
