
const smtpTransport = require('nodemailer-smtp-transport')
const nodemailer = require('nodemailer')

exports.sendEmail= function(mailOptions){
    const transport = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: process.env.USEREMAIL,
            pass: process.env.PASSWORD
        }
        }))

    transport.sendMail(mailOptions, function (err, info) {
        if(err)
            return err
        else
            return info;     
    });
}
