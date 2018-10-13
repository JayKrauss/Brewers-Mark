const routes = require('express').Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const adminUser = require("../../models/adminUser.js");

//POST route on registration/login on click "submit"- creates new User
routes.post('/registration', function (req, res, next) {
  console.log("HERE");
  console.log(req.cookies['connect.sid']);

  if (req.body.company &&
    req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.phone &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

      if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("Passwords do not match. Please confirm password.");
        return next(err);
      }

    var adminUserData = {
      company: req.body.company,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
    }

    adminUser.create(adminUserData, function (error, user) {
      if (error) {
        return next(error);
      }
      else {
        req.session.userId = user._id;
        console.log("New Admin Created: " + req.body.company);
        // res.redirect("../profile");
        res.cookie('connect.sid', req.session.userId, {maxAge: 9000000});
        res.send();
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
              user: 'rvabrewersmark@gmail.com',
              pass: 'brewersmark'
            }
        });

        let newAdminEmail = {
          from: '"RVA Brewers Mark" <rvabrewersmark@gmail.com>', // sender address
          to: 'rvabrewersmark@gmail.com', // list of receivers
          subject: 'New Administrator Added ✔', // Subject line
          text: 'New Administrator Added', // plain text body
          html: '<b>New Administrator Added</b>' // html body
        };

        transporter.sendMail(newAdminEmail, (error, info) => {
          if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return process.exit(1);
          }

          console.log('Message sent successfully!');
          console.log(nodemailer.getTestMessageUrl(info));

          transporter.close();
        });
      }
    });
  }
  else if (req.body.loginUsername && req.body.loginPassword) {

    var username = req.body.loginUsername;
    var password = req.body.loginPassword;

    adminUser.findOne({ 'username': username }, function (err, user) {
      if (err) {
        console.log("Error finding Admin Username: " + err);
        console.log(user.username);
      }
      else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err || !user) {
            console.log('Wrong username or password');
          }
          else if (err) {
            console.log("Error authenticating user: " + err);
            return next(err)
          }
          else if (result == true) {
            req.session.userId = user._id;
            console.log("Admin Login: " + req.body.username);
            // res.redirect("../profile");
            res.cookie('connect.sid', req.session.userId, {maxAge: 9000000});
            return res.json({});

          }
          else {
            console.log("Error authenticating user: no err")
          }
        });
      }
    });
  }
  return res.json({});
});


// GET route after registering
routes.get('/profile', function (req, res, next) {
  var userId = req.cookies['connect.sid'];
  adminUser.findById(userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      }

      else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        }

        else {
          return res.json(user);
        }
      }
    });
});

// GET for logout logout
routes.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }

      else {
        return res.redirect('/');
      }
    });
  }
});

module.exports = routes;