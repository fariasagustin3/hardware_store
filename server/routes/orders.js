import { Router } from "express";
import { getAllOrders } from "../controllers/orders/getAllOrders.controller.js";
import { getOrderById } from "../controllers/orders/getOrderById.controller.js";
import { createOrder } from "../controllers/orders/createOrder.controller.js";
import { deleteOrder } from "../controllers/orders/deleteOrder.controller.js";
import { editOrder } from "../controllers/orders/editOrder.controller.js";

const router = Router();

router
  .get("/list", getAllOrders)
  .get("/:id/order", getOrderById)
  .post("/create", createOrder)
  .delete("/:id/delete", deleteOrder)
  .put("/:id/edit", editOrder);

export default router;
