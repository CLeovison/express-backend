import mongoose from "mongoose";

export const CheckoutSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  address: [
    {
      province: { type: String, required: true },
      city: { type: String, required: true },
      barangay: {type: String, required: true},
      postal: {type: Number, required: true}
    },
  ],
  mobilenum: {type: Number, required: true}
  
});

export default mongoose.model("Checkout", CheckoutSchema);
