import mongoose from "mongoose";
import { Schema } from "mongoose";
export const CheckoutSchema = new mongoose.Schema({
  _id: { type: Schema.ObjectId },
  fname: { type: String, ref: "User", required: true },
  lname: { type: String, ref: "User", required: true },
  address: [
    {
      province: { type: String, required: true },
      city: { type: String, required: true },
      barangay: { type: String, required: true },
      postal: { type: Number, required: true },
    },
  ],
  mobilenum: { type: Number, required: true },
});

export default mongoose.model("Checkout", CheckoutSchema);
