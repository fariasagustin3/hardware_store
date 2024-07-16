import { Order } from "../../models/Order.js";

export const deleteOrder = async (req, res) => {
  try {
    await Order.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};