
const smtpTransport = require('nodemailer-smtp-transport')
const nodemailer = require('nodemailer')

exports.sendEmail= function(mailOptions){
    mailOptions.from=process.env.USEREMAIL;
    
    const transport = nodemailer.createTransport(smtpTransport({
        host : process.env.HOSTEMAIL,
        port: 25,
        auth : {
            user : process.env.USEREMAIL,
            pass : process.env.PASSWORDEMAIL
        }
    }));

    transport.sendMail(mailOptions, function (err, info) {
        
        if(err)
            console.log(err);
        else
            console.log(info);     
    });
}
