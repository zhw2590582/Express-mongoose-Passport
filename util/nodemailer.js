var nodemailer = require('nodemailer');
var base = require('../config/base');

var mailer = {};
mailer.send = function(callback) {
  var transporter = nodemailer.createTransport(base.mailStmp);
  var mailOptions = {
    from: base.mailStmp.auth.user,
    to: base.mailStmp.to,
    subject: 'nodemailer邮件发送',
    html: '<h2>nodemailer基本使用:</h2>'
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      callback(err, null)
      return;
    }
    callback(null, info);
  });
}

module.exports = mailer;

// var mailer = require('./util/nodemailer');
// mailer.send(function(err,info){
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info);
// })
