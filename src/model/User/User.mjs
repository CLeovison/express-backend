import mongoose from "mongoose";
import bcrypt from "bcryptjs";



const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {type: String, enum: ["User", "Admin"], default: "User",},
  isSoftDeleted: {type: Boolean, default: false},
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
