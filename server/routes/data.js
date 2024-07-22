const { Router } = require('express');
const { brands, categories, products } = require('../data/data.js') 
const { Category } = require('../models/Category.js');
const { Brand } = require('../models/Brand.js');
const { Product } = require('../models/Product.js');

const router = Router();

router.post("/bulk-create", async (req, res) => {
  try {
    await Category.bulkCreate(categories);
    await Brand.bulkCreate(brands);
    await Product.bulkCreate(products);

    res.status(201).json({ message: "Data created successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err });
  }
})

router.delete("/bulk-delete", async (req, res) => {
  try {
    await Category.destroy();
    await Brand.destroy();

    res.status(201).json({ message: "Data deleted successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err });
  }
})

module.exports = router;