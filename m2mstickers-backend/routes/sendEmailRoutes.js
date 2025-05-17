const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zamysyah40@gmail.com',  // Replace with your email
    pass: 'ktpg ahyw nhzs zcig',   // Replace with your app password
  },
});

// POST /send-email
router.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const mailOptions = {
    from: 'zamysyah40@gmail.com',  // Must match user in transporter
    to: 'zamysyah40@gmail.com',
    subject: 'New Contact Form Submission',
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
      return res.status(500).send('Failed to send email');
    }
    console.log('Email sent successfully:', info);
    res.status(200).send('Email sent successfully');
  });
});

module.exports = router;
