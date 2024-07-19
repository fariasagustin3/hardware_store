import { Router } from 'express';
import { brands, categories, products } from '../data/data.js' 
import { Category } from '../models/Category.js';
import { Brand } from '../models/Brand.js';
import { Product } from '../models/Product.js';

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

export default router;