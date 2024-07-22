const { Router } = require('express');
const { getAllBrands } = require('../controllers/brands/getAllBrands.controller.js');
const { getBrandById } = require('../controllers/brands/getBrandById.controller.js');
const { createBrand } = require('../controllers/brands/createBrand.controller.js');
const { deleteBrand } = require('../controllers/brands/deleteBrand.controller.js');
const { editBrand } = require('../controllers/brands/editBrand.controller.js');

const router = Router();

router
  .get("/list", getAllBrands)
  .get("/:id/brand", getBrandById)
  .post("/create", createBrand)
  .delete("/:id/delete", deleteBrand)
  .put("/:id/edit", editBrand);

module.exports = router