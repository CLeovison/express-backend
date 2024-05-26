
import mongoose from "mongoose";
import { Schema } from "mongoose";

export const WishListSchema = new mongoose.Schema({
  products: [
    {
      productname: { type: String, required: true },
      productID: { type: Schema.ObjectId, required: true },
      variantsOf: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  image: { type: String, required: true },
});

export default mongoose.model("WishList", WishListSchema);
