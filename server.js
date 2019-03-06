const express = require('express')
const bodyParser = require("body-parser");
const se = require("./send-email");

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(res,res){
    res.status(200).json({
            user: process.env.USEREMAIL,
            pass: process.env.PASSWORD
        });
});

app.post('/',function(req,res){
    const mailOptions = {
        from,
        to,
        subject,
        html
      } = req.body; 

      var retorno = se.sendEmail(mailOptions)

      res.status(200).json(retorno);
});

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
