const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');

nodemailer.createTransport({
    host: "mail.google.com",
    port: 587,
    auth: {
        user: "ea.yarbrough98@gmail.com",
        pass: "n/A"
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
      to: "ea.yarbrough98@gmail.com",
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