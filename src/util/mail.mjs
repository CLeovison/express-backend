//Nodemailer/Forgot Username Password
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD, // Note That The Password That Needs to be in here is the password from app password in google
  },
});

const mailOptions = {
  from: "cleovison@gmail.com",
  to: email,
  subject: "Forgot Password",
  text: "Please Reset your password",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
  return res.status(200).json({ message: "Please Reset Your Password" });
});
