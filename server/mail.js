const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.THE_EMAIL,
        pass: process.env.THE_PASSWORD
    }
});

transporter.verify(function(error, success) {
    if(error) {
        console.log(error);
    } else {
        console.log("Server is ready to take your message!");
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
    var mail = {
      from: name,
      to: process.env.THE_EMAIL,
      subject: "Message From Portfolio",
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })