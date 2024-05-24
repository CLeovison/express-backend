import { Cart } from "../model/Products/Cart.mjs";

export const CartController = {
  addCart: async (req, res) => {
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();

      res.status(201).json({ message: "You Successfully Added An Item" });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "You didn't add an item", error });
    }
  },
  getAllCart: async (req, res) => {},
  updateCart: async (req, res) => {},
  deleteCart: async (req, res) => {},
};
