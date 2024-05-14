import mongoose, { SchemaType } from "mongoose";


export const ProductSchema = new mongoose.Schema({
   available:{type: Boolean}


})

// available: {type: Boolean}, productname:{type: String}, productype,productdetails, isSoftDelete


//Wishlist userid, productid

//Add to cart, quantity, userid