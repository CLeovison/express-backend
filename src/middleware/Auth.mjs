import jwt from "jsonwebtoken";
import { secretKey } from "../util/SecretToken.mjs";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided."); 

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    console.log(ex);
    res.status(400).send("Invalid token");
  }
};
