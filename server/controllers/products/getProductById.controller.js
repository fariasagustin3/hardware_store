const { Product } = require("../../models/Product.js");

const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });
    if(!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json(product)
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getProductById
}
