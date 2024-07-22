const { Router } = require("express");
const { getAllOrders } = require("../controllers/orders/getAllOrders.controller.js");
const { getOrderById } = require("../controllers/orders/getOrderById.controller.js");
const { createOrder } = require("../controllers/orders/createOrder.controller.js");
const { deleteOrder } = require("../controllers/orders/deleteOrder.controller.js");
const { editOrder } = require("../controllers/orders/editOrder.controller.js");

const router = Router();

router
  .get("/list", getAllOrders)
  .get("/:id/order", getOrderById)
  .post("/create", createOrder)
  .delete("/:id/delete", deleteOrder)
  .put("/:id/edit", editOrder);

module.exports = router;
