import { Product } from "../../models/Product.js";
import { Brand } from "../../models/Brand.js";
import { Category } from "../../models/Category.js";

export const getAllProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 100;
  const offset = (page - 1) * limit;
  const { BrandId, CategoryId } = req.query;
  console.log(BrandId, CategoryId)

  try {
    const whereClause = {};
    if (CategoryId === "null" && BrandId !== "null") whereClause.BrandId = BrandId; 
    if (CategoryId !== "null" && BrandId === "null") whereClause.CategoryId = CategoryId; 
    if (CategoryId !== "null" && BrandId !== "null") {
      whereClause.CategoryId = CategoryId;
      whereClause.BrandId = BrandId;
    }
    console.log(whereClause)
    const { count, rows } = await Product.findAndCountAll({
      where: whereClause,
      include: [Brand, Category],
      limit, 
      offset
    });

    res.status(200).json({
      totalItems: count,
      data: rows,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
