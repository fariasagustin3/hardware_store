import { Brand } from "../../models/Brand.js";

export const editBrand = async (req, res) => {
  try {
    await Brand.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Brand edited successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};