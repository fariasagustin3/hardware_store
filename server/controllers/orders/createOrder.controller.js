const { Order } = require("../../models/Order.js");

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

module.exports = {
  createOrder
}
