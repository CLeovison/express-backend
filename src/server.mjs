import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { RegisterRoutes } from "./routes/registerRoutes.mjs";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mong
app.use("/register", RegisterRoutes);

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
