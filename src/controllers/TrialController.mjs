import User from "../model/User/User.mjs";
import { secretKey } from "../util/SecretToken.mjs";
import jwt from "jsonwebtoken";

export const TrialController = {
  forgotPassword: async (req, res) => {
    const { email, username } = req.body;

    try {
      const user = await User.findOne({ email }, { username });
      if (!user)
        return res.status(401).json({ message: "The User Doesn't Exist" });

      const secret = secretKey + user.password;
      const token = jwt.sign({ email: user.email }, secret, {
        expiresIn: "1h",
      });
      const link = `http://localhost:5000/trial/reset-password/${user._id}/${token}`;

    
      return res
        .status(200)
        .json({ message: "You Can Now Reset Your Password" , link});
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ error: "Please Provide A Correct Username/Email", error });
    }
  },

  resetPass: async (req, res) => {
    const { id, token } = req.params;

    const user = await User.find({ _id: id });
    if (!user) {
      return res.status(401).json({ message: "The User Doesn't Exist" });
    }
    const secret = secretKey + user.password;

    try {
      const verifyUser = jwt.verify(token, secret);
      res.status(205).render("index", { email: verifyUser.email,  });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Not Verified" });
    }
  },
};
