var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var xoauth = require("xoauth2");
var user = require('./connection.js');
userdetails = user;

exports.registeruser = function(req, res, next) {
    var user_mail = req.body.email;
    userdetails.find({ email: user_mail }, function(err, docs) {
        if (docs[0] == null) {

            var userDetails = new userdetails({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.mobile,
                dob: null,

            });

            userDetails.save(function(err, data) {
                if (err) {
                    console.log("err", err);
                } else {
                    console.log("sucess");
                    res.json({ success: true, msg: 'successfully created', code: 1 });
                    var accountSid = 'ACe70b3a4b1960a91d17068a1535d615f8';
                    var authToken = 'd94fb2261bee95ef1a07643faf40a66f';

                    var client = require('twilio')(accountSid, authToken);
                    client.messages.create({
                        to: '+91' + req.body.mobile,
                        from: '+12243331009',
                        body: 'Hello user' + req.body.username + ' Registration successfully with sairam allampalli friendship '

                    }, function(err, message) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(message);
                        }

                    })

                    // var accountSid = 'ACb506924ae8d30aaabd4b44411cc1053a';
                    // var authToken = '4d80ca0478ee23653dd65135392d6378';

                    // var twilio = require('twilio');
                    // var client = new twilio.RestClient(accountSid, authToken);
                    // console.log(req.body.mobile);
                    // client.messages.create({
                    //     body: 'Your Verified',
                    //     to: '9492666084', // Text this number
                    //     from: '+14805256584' // From a valid Twilio number
                    // }, function(err, message) {
                    //     if (err) {
                    //         console.log(err.message);
                    //     } else {
                    //         res.json('code');
                    //     }
                    // });



                }

            })

        } else
            res.json(0)
    })

}

exports.loginUser = function(req, res, next) {
    // var email = req.body.email;
    // var password = req.body.pwd;
    // if (email == '' || password == '') {
    //     res.json(0);
    //     console.log("jgsafhgd");
    // } else {
    //     userDetails.find({ $and: [{ email: email, password: pwd }] }, function(err, docs) {
    //         if (err) {
    //             console.log(err)
    //         } else if (docs[0] == null) {
    //             console.log("error");
    //             res.json(1)

    //         } else {
    //             res.json(2);

    //         }

    //     })

    // }
    console.log(req.body);
    var email = req.body.email;
    var pwd = req.body.pwd;
    if (email == '' || pwd == '') {
        res.json(0);
    } else {

        userdetails.find({ $and: [{ email: email }, { password: pwd }] }, function(err, docs) {
            if (err) {
                console.log(err)
            } else if (docs[0] == null) {

                res.json(1);

            } else {
                res.json(2);

            }
        })
    }

}

exports.forgotpassword = function(req, res, next) {
    var email = req.body.email;
    userdetails.findOne({ email: email }, function(err, docs) {
        console.log(docs);
        if (err) {
            throw err;
        } else if (!docs) {
            res.json(1)

        } else {
            var password = docs["password"]

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'sairamallampalli02@gmail.com',
                    clientId: '449182280796-kv7omcp8sotimktfn7d2d629sln9aag7.apps.googleusercontent.com',
                    clientSecret: 'zPvb7txRGwOgNFyWs7Sap8Sc',
                    refreshToken: '1/VnFro3fajGcM3J5ShNsLb60v7lTB8ThszG7WkHdyGMI',
                    accessToken: 'ya29.GlsbBEm_PguJAZb-FFxPAkVmxz6nYY_DjoY_GkaJNAjzPT7D729dS8KWYVpYilE8ld1cnCnHj6jbi7p7vxfrmt6nbvezWr6FxZBTk9r_aC7StqBXjk3vEBN5da-1'

                }
            })
            var mailOptions = {
                from: 'Password  <sairamallampalli02@gmail.com>',
                to: req.body.email,
                subject: 'Forgot Password',
                html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head></head><body><style></style><b>Your Password is<b>  <i style="color:red">' + password + '</i> </b></b></body></html>'
            }

            transporter.sendMail(mailOptions, function(err, resp) {
                if (err) {
                    console.log('Error' + err);
                } else {
                    console.log('Email Sent');
                    res.json(0)
                }
            })

        }
    })




}