import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  fname: { type: String, require: true },
  lname: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  role:{},
  createAt: { type: Date, default: new Date() },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  next();
});

UserSchema.index({
  fname: "text",
  lname: "text",
  username: "text",
  email: "text",
});
export default mongoose.model("User", UserSchema);
