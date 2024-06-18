import mongoose from "mongoose";
import { Schema } from "mongoose";

const WishListSchema = new mongoose.Schema({
  userID: { type: Schema.ObjectId, ref: "User" },
  productId: { type: Schema.ObjectId, ref: "Products", required: true },
  variants: {
    color: { type: String, required: true },
    size: { type: String, required: true },
  },
  price: { type: Number, required: true },
  isLiked: { type: Boolean, default: false},
});

export default mongoose.model("WishList", WishListSchema);
