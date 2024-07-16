import { Order } from "../../models/Order.js";

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });
    if(!order) {
      return res.status(404).json({ message: "Order not found" });
    } else {
      return res.status(200).json(order)
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}
