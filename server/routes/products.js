const { Router } = require('express');
const { getAllProducts } = require('../controllers/products/getAllProducts.controller.js');
const { createProduct } = require('../controllers/products/createProduct.controller.js');
const { deleteProduct } = require('../controllers/products/deleteProduct.controller.js');
const { editProduct } = require('../controllers/products/editProduct.controller.js');
const { getProductById } = require('../controllers/products/getProductById.controller.js');

const router = Router();

router
  .get("/list", getAllProducts)
  .get("/:id/product", getProductById)
  .post("/create", createProduct)
  .delete("/:id/delete", deleteProduct)
  .put("/:id/edit", editProduct);

module.exports = router;