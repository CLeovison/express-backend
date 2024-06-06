import Wishlist from "../model/Products/Wishlist.mjs";

export const WishListController = {
  addWishList: async (req, res) => {
    const newWish = new Wishlist(req.body);

    try {
      const saveWish = await newWish.save();
      res.status(200).json({ message: "You Successfuly Added A New Item" });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .json({ message: "The Item That You Add Doesn't Exist", error });
    }
  },
  getAllWish: async (req, res) => {
    const { userID } = req.body;
    try {
      const getAll = await Wishlist.find({ userID: userID });
      res.status(205).json({ message: "You Get All Item", items: getAll });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "You Didn't Get The Items" });
    }
  },
  removeWishList: async (req, res) => {
    try {
      const removeList = await Wishlist.findByIdAndDelete();
      res.status(200).json({ message: "You Successfuly Remove The Item" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "The Item Cannot Be Found" });
    }
  },
};
