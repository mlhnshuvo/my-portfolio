require('dotenv').config()
const express = require('express')
const app = express()
const nodemailer = require("nodemailer");

app.use(express.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
});

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('This is a simple app for sending email')
})

app.post('/send', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { name, email, message } = req.body

    const messageHtml = `
    <div>
    <h3>Name: ${name}</h3>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    </div>`

    transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.ADMIT_USER,
        subject: "Message from your portfolio",
        html: messageHtml,
    })
        .then(() => {
            res.send('Message sent to admin email')
        })
        .catch(() => {
            res.send('Something is wrong');
        })
})


app.listen(port, () => {
    console.log(`App listening at ${port}`)
})
