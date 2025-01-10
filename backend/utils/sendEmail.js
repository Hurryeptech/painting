const nodemailer = require("nodemailer");
const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER_EMAIL,
      pass: process.env.SMTP_USER_PASS,
    },
  });
  // Send mail with defined transport object
  const sendMail = await transporter.sendMail({
    from: `H-Forms <${process.env.SMTP_USER_EMAIL}>`,
    to: options.to,
    subject: options.subject,
    html: options.content,
  });

  if (sendMail) return true;
  else return false;
};
module.exports = sendMail;