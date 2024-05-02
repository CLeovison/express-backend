import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fname: { type: String, require: true },
  lname: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  confirm: { type: String, require: true },
  email: { type: String, require: true } });


  
UserSchema.index({ fname: "text", lname: "text", username: "text", email: "text"});
export default mongoose.model("User", UserSchema);
