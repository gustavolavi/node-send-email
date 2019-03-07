const express = require('express')
const bodyParser = require("body-parser");
const se = require("./send-email");

var porta = process.env.PORT || 8080;

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/',function(req,res){
    const mailOptions = {
        to,
        subject,
        html
      } = req.body; 

      var retorno = se.sendEmail(mailOptions)

      res.status(200).json(retorno);
});

const server = app.listen(porta, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
