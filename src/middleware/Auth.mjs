import jwt from "jsonwebtoken";
import { secretKey } from "../util/SecretToken.mjs";
import User from "../model/User/User.mjs";

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided."); 
  
   
  try {
    
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    const existUser = await User.findOne({_id: decoded.id})
    if(!existUser) return res.status(400).json("User doesn't Exist")
    req.role = existUser.role
  } catch (ex) {
    console.log(ex);
    res.status(400).send("Invalid token");
  }
  
  next();
};
