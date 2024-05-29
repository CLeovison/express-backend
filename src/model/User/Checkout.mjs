import mongoose from "mongoose";

export const CheckoutSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postal: { type: Number, required: true },
});


export default mongoose.model('Checkout', CheckoutSchema)