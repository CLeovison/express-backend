//User ID, PRODUCT ID, size, quantity

import { Schema, mongoose } from "mongoose";

export const CartSchema = new mongoose.Schema({
  userID: { type: Schema.ObjectId, ref: "User", required: true },
  products: [
    {
      productID: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      size: { type: String, required: true },
      quantity: { type: Number, default: 1, required: true },
    },
  ],
});
