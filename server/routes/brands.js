import { Router } from 'express';
import { getAllBrands } from '../controllers/brands/getAllBrands.controller.js';
import { getBrandById } from '../controllers/brands/getBrandById.controller.js';
import { createBrand } from '../controllers/brands/createBrand.controller.js';
import { deleteBrand } from '../controllers/brands/deleteBrand.controller.js';
import { editBrand } from '../controllers/brands/editBrand.controller.js';

const router = Router();

router
  .get("/list", getAllBrands)
  .get("/:id/brand", getBrandById)
  .post("/create", createBrand)
  .delete("/:id/delete", deleteBrand)
  .put("/:id/edit", editBrand);

export default router;