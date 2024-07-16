import { Router } from 'express';
import { getAllCategories } from '../controllers/categories/getAllCategories.controller.js';
import { createCategory } from '../controllers/categories/createCategory.controller.js';
import { deleteCategory } from '../controllers/categories/deleteCategory.controller.js';
import { editCategory } from '../controllers/categories/editCategory.controller.js';
import { getCategoryById } from '../controllers/categories/getCategoryById.controller.js';

const router = Router();

router
  .get("/list", getAllCategories)
  .get("/:id/category", getCategoryById)
  .post("/create", createCategory)
  .delete("/:id/delete", deleteCategory)
  .put("/:id/edit", editCategory);

export default router;