import mongoose from "mongoose";
import { Schema } from "mongoose";

export const WishListSchema = new mongoose.Schema({
  userID: {type: Schema.ObjectId, ref: "User"},
  productId: { type: Schema.ObjectId, ref: "Products", required: true },
  variants: [
    {
      color: { type: String, required: true },
      size: { type: String, required: true },
    },
  ],
  isLiked:{type: Boolean, default: false},
  price: { type: Number, required: true },
});

export default mongoose.model('WishList', WishListSchema)