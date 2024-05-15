import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  available: { type: Boolean, required: true },
  productname: { type: String, required: true },
  producttype: { type: String, required: true },
  productdetails: { type: String, required: true },
  isSoftDelete: { type: Boolean, default: false },
});

// available: {type: Boolean}, productname:{type: String}, productype,productdetails, isSoftDelete

//Wishlist userid, productid

//Add to cart, quantity, userid
