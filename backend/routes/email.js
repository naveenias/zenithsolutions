// contactRoute.js (Express route)
const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/sendemail', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use any other email service like 'Yahoo', 'Outlook', etc.
    auth: {
      user: 'nm8602@srmist.edu.in', // Your email
      pass: 'akvl izrj kxle nfbl', // Your email password or app-specific password
    },
  });

  // Set up the email data
  const mailOptions = {
    // from: email, // The sender's email
    from: `${name} <${email}>`, // Spoof user's email in 'from'
    to: 'nm8602@srmist.edu.in', // Your email to receive the contact messages
    subject: subject,
    text: `You have a new message from: \n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Something went wrong, please try again later.' });
  }
});

module.exports = router;
