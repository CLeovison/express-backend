import mongoose from "mongoose";
import { Schema } from "mongoose";

export const WishListSchema = new mongoose.Schema({
  productId: { type: Schema.ObjectId, required: true },
  variants: [
    {
      color: { type: String, required: true },
      size: { type: String, required: true },
    },
  ],
  price: { type: Number, required: true },
});

export default mongoose.model('WishList', WishListSchema)