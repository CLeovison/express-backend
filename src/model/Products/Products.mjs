import { required } from "joi";
import mongoose, { mongo } from "mongoose";

export const ProductSchema = new mongoose.Schema({
  available: { type: Boolean, required: true },
  productname: { type: String, required: true },
  producttype: { type: String, required: true },
  productdetails: { type: String, required: true },
  variesBy: {type: String, required: true},
  isSoftDelete: { type: Boolean, default: false },
});

export default mongoose.model('Products',ProductSchema)
// available: {type: Boolean}, productname:{type: String}, productype,productdetails, isSoftDelete

//Wishlist userid, productid

//Add to cart, quantity, userid
