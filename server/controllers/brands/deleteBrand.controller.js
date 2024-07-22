const { Brand } = require("../../models/Brand.js");

const deleteBrand = async (req, res) => {
  try {
    await Brand.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = {
  deleteBrand
}
