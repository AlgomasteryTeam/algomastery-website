const express = require('express')
const router = express.Router()
const nodemailer = require("nodemailer");
const dotenv = require('dotenv')
dotenv.config()


router.post('/', (req, res) => {

  const sendEmailToUser = async (userEmail) => {

    // // Generate test SMTP service account from ethereal.email
    // // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL,
    //   port: 465,
    //   secure: true, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.EMAIL, // generated ethereal user
    //     pass: process.env.PASSWORD, // generated ethereal password
    //   },
    // });

    // console.log('Your password: ', process.env.PASSWORD)

    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //   from: process.env.EMAIL, // sender address
    //   to: `${userEmail}`, // list of receivers
    //   subject: "Welcome to Algomastery", // Subject line
    //   text: "Hello world", // plain text body
    //   html: "<b>Hello world</b>", // html body
    // }, (error, response) => {
    //   if (error) {
    //     console.log('Error occured while sending the email: ' + error)
    //   } else if (response) {
    //     console.log('Response from sending the message: ' + response)
    //   }
    // })

    // console.log("Message sent: %s", info.messageId);
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));





    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: 'Sending Email using Node.js',
      text: `Hi, how are you ?`
      // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });


  }

  const userEmail = req.body.email
  console.log('Email:', userEmail)
  res.status(200).json({ success: true, message: 'Chat data recieved successfully' })
  sendEmailToUser(userEmail)
})

module.exports = router