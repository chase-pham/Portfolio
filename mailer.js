const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourEmail@gmail.com",
    pass: "yourPassword",
  },
});

exports.sendConfirmationEmail = function (email) {
  const mailOptions = {
    from: "yourEmail@gmail.com",
    to: email,
    subject: "New Contact Form Submission",
    text: "Thank you for reaching out!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
