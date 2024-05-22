//User ID, PRODUCT ID, size, quantity


import mongoose, { Schema } from "mongoose";

export const Cart = new mongoose.Schema({
    userID: {type: Schema.Types.ObjectId, required: true},
    productID: {type: Schema.Types.ObjectId, required: true},
    size: {type: String, required: true},
    quantity: {type: Number, required: true}
})