require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  host: process.env.GMAIL_USER,
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
  enableSsl: true,
});

const port = process.env.PORT || 5000;

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  let messageHtml = `
    <div>
        <h3>Name: ${name}</h3>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    </div>`;
  transporter
    .sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIT_USER,
      subject: "Message from your portfolio",
      html: messageHtml,
    })
    .then(() => {
      res.send("Message sent to admin email");
    })
    .catch(() => {
      res.send("Something is wrong");
    });
});

app.get("/", (req, res) => {
  res.send("This is a simple app for sending email");
});

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
