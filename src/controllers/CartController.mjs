import Cart from "../model/Products/Cart.mjs";

export const CartController = {
  addCart: async (req, res) => {
    const newCart = new Cart(req.body);
    
    try {
      const savedCart = await newCart.save();

      res.status(201).json({ message: "You Successfully Added An Item" });
    } catch (error) {
      res.status(401).json({ error: "You didn't add an item", error });
    }
  },
  getAllCart: async (req, res) => {
    try {
      const allCart = await Cart.find({});
      res.status(200).send(allCart);
    } catch (error) {
      res.status(401).json({ status: "Failed", error });
    }
  },
  updateCart: async (req, res) => {
    try {
      const updateCarts = await Cart.findByIdAndUpdate(req.params.id, req.body);

      res.status(200).send(updateCarts);
    } catch (error) {
      res
        .status(400)
        .json({ message: "You did not successfully update your cart", error });
    }
  },
  deleteCart: async (req, res) => {
    try {
      const deleteCart = await Cart.findByIdAndDelete(req.params.id);
      res.status(200).send(deleteCart);
    } catch (error) {
      res
        .status(404)
        .json({ status: "You'r deletion is not successful", error });
    }
  },
};
