const { Order } = require("../../models/Order.js");

const editOrder = async (req, res) => {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Order edited successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = {
  editOrder
}
