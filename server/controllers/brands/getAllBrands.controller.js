import { Brand } from "../../models/Brand.js";

export const getAllBrands = async (req, res) => {
  try {
    const brand = await Brand.findAll();
    res.status(200).json(brand);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
