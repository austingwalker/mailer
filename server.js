const express = require("express");
const bodyParser = require("body-parser");
const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

const test = {
  success: "Test succesful!"
}

app.get("/api/test", function(req, res) {
  console.log(test)
  res.json(test);
});

app.post("/api/email", function(req, res) {
  console.log(req.body.data)
  res.json(test);
});

// -------------------------------------------------------------------------

// app.post("/api/email", function(req, res) {
//   const emails = req.body.email.join(", ")

//   async function main() {

//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'austinwalker.dev@gmail.com', // generated ethereal user
//       pass: '' // generated ethereal password
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });

//   transporter.use("compile",hbs({
//     viewEngine:{
//        partialsDir: 'views',
//        defaultLayout:""
//    },
//       viewPath:"./views/",
//       extName:".handlebars"
//     }));
  
//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Austin Walker" <austinwalker.dev@gmail.com', // sender address
//     to: emails, // list of receivers
//     subject: "Mailer Template", // Subject line
//     // html: emailHTML, // html body
//     template: 'index',
//     attachments: []

//   });
  
//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }
// main().catch(console.error)
// const sucessful = {
//   success: "Succesful!"
// }
// res.json(sucessful) 
// });


//--------------------------------------------------------------------------

// Connect to a DB here && require it at the top


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
