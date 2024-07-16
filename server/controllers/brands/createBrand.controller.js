import { Brand } from "../../models/Brand.js";

export const createBrand = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
