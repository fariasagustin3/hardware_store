const { Product } = require("../../models/Product.js");

const editProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Product edited successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = {
  editProduct
}
