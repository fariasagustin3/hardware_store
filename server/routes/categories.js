const { Router } = require('express');
const { getAllCategories } = require('../controllers/categories/getAllCategories.controller.js');
const { createCategory } = require('../controllers/categories/createCategory.controller.js');
const { deleteCategory } = require('../controllers/categories/deleteCategory.controller.js');
const { editCategory } = require('../controllers/categories/editCategory.controller.js');
const { getCategoryById } = require('../controllers/categories/getCategoryById.controller.js');

const router = Router();

router
  .get("/list", getAllCategories)
  .get("/:id/category", getCategoryById)
  .post("/create", createCategory)
  .delete("/:id/delete", deleteCategory)
  .put("/:id/edit", editCategory);

module.exports = router;