const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending message" });
  }
});

module.exports = router;