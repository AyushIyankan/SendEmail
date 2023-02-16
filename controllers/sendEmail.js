const nodemailer = require("nodemailer");
const sendgridMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
  let testaccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "serena.lemke41@ethereal.email",
      pass: "v6UzPYMJWEJXAtheaz",
    },
  });

  let info = await transporter.sendMail({
    from: '"Ayush Iyankan" <ayushiyankan007@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending emails with nodejs</h2>",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "ayushiyankan007@gmail.com",
    from: "ayushiyankan007@gmail.com",
    subject: "Test Send Grid",
    text: "test email",
    html: "<h3>Bruh this is a test email, ignore it</h3>",
  };

  const info = await sendgridMail.send(msg); //callback
  res.json(info);
};

module.exports = sendEmail;
