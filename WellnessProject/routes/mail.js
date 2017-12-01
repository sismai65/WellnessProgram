var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('../models/User');
var email = require('emailjs/email');



//SEND mail to the admin
router.post('/sendmail', function (req,res) {
  console.log("post req is sending");
  var data = req.body;
  console.log("Mail Content:", data);
  var server  = email.server.connect({
    /*user:      "souhail.ismaili-alaoui@capgemini.com",
    password:  "",
    ssl:       true,
    port:      25,
    tls :      true, */
    host:      "10.72.96.54",
    port:       25,
  });


// send the message and get a callback with an error or details of the message that was sent
  server.send({

    text:    "Bonjour,\nJe souhaite rejoindre le challenge: "
           +JSON.stringify(data['name']),
    from:    "user@user.com",
    to:      "souhail.ismaili-alaoui@capgemini.com",
    subject: "Je souhaite rejoindre un challenge"
  }, function(err, message) {
    if(err) console.log("ERROR:", err);
    else return res.json({success: true, msg: 'sent'});

  });

});



module.exports = router;






