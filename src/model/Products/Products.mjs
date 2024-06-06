import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  available: { type: Number, required: true },
  productinfo: {
    productname: { type: String, required: true },
    producttype: { type: String, required: true },
    productdetails: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },

  variants: {
    size: { type: String, required: true },
    color: { type: String, required: true },
  },

  image: { type: String, required: true },
  isSoftDelete: { type: Boolean, default: false },
});

ProductSchema.index({ productname: "text", producttype: "text" });
export default mongoose.model("Products", ProductSchema);
// available: {type: Boolean}, productname:{type: String}, productype,productdetails, isSoftDelete

//Wishlist userid, productid

//Add to cart, quantity, userid
