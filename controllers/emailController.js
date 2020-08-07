const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');

// Defining methods for the emailController
module.exports = {
    findTemplate: function(req, res) {
        const payload = req.body.data
        console.log(payload)

        async function main() {

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: 'austinwalker.dev@gmail.com', // generated ethereal user
            pass: '' // generated ethereal password
            },
            tls: {
            rejectUnauthorized: false
            }
        });

        transporter.use("compile",hbs({
            viewEngine:{
            partialsDir: 'templates',
            defaultLayout:""
        },
            viewPath:"./templates/DMS",
            extName:".html"
            }));
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Austin Walker" <austinwalker.dev@gmail.com', // sender address
            to: "agwalker249@gmail.com", // list of receivers
            subject: "Mailer Template", // Subject line
            // html: emailHTML, // html body
            template: 'index',
            attachments: []

        });
        
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        main().catch(console.error)
        const sucessful = {
        success: "Succesful!"
        }
        res.json(sucessful) 
      }
}

