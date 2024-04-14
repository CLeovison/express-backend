import mongoose, { Schema } from "mongoose";

export const registerSchema = new mongoose.Schema({
        fname:{
            type: String,
            require: true
        },
        lname:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        }
    
});
