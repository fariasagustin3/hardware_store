import { Router } from 'express';
import { getAllProducts } from '../controllers/products/getAllProducts.controller.js';
import { createProduct } from '../controllers/products/createProduct.controller.js';
import { deleteProduct } from '../controllers/products/deleteProduct.controller.js';
import { editProduct } from '../controllers/products/editProduct.controller.js';
import { getProductById } from '../controllers/products/getProductById.controller.js';

const router = Router();

router
  .get("/list", getAllProducts)
  .get("/:id/product", getProductById)
  .post("/create", createProduct)
  .delete("/:id/delete", deleteProduct)
  .put("/:id/edit", editProduct);

export default router;