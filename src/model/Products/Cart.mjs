import mongoose from "mongoose";
import { Schema } from "mongoose";

export const CartSchema = new mongoose.Schema({
  userID: { type: Schema.ObjectId, ref: "User", required: true },
  products: [
    {
      productID: {
        type: Schema.ObjectId,
        ref: "Product",
        required: true,
      },
      color: { type: String, required: true },
      size: { type: String, required: true },
    },
  ],
  price: {type: Number, required: true}
});

export default mongoose.model("Cart", CartSchema);
