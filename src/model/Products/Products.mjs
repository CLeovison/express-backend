import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  available: { type: Number, required: true },
  productinfo: {
    productname: { type: String, required: true },
    producttype: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },

  variants: {
    size: { type: String, required: true },
    color: { type: String, required: true },
  },

  imageUrl: { type: String, required: true },
  update: { type: Date },
  isSoftDelete: { type: Boolean, default: false },
});

ProductSchema.index({
  productinfo: "text",
  productinfo: "text",
  producttype: "text",
});
export default mongoose.model("Products", ProductSchema);
// available: {type: Boolean}, productname:{type: String}, productype,productdetails, isSoftDelete

//Wishlist userid, productid

//Add to cart, quantity, userid
