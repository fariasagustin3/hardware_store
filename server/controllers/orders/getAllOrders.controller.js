import { Order } from "../../models/Order.js";

export const getAllOrders = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 100;
  const offset = (page - 1) * limit;

  try {
    const { count, rows } = await Order.findAndCountAll({
      limit,
      offset,
    });

    res.status(200).json({
      totalItems: count,
      data: rows,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
