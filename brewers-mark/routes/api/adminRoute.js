const routes = require('express').Router();
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
// const session = require('express-session');

const adminUser = require("../../models/adminUser.js");

// GET route-Load login page
// routes.get('/', (req, res) => {
//   res.sendFile('../adminLogin.html');
// });

// module.exports = (app) => {
//   /*
//    * Sign up
//    */
//   app.post('/api/account/signup', (req, res, next) => {
//     const { body } = req;
//     const {
//       password
//     } = body;
//     let {
//       email
//     } = body;
    
//     if (!email) {
//       return res.send({
//         success: false,
//         message: 'Error: Email cannot be blank.'
//       });
//     }
//     if (!password) {
//       return res.send({
//         success: false,
//         message: 'Error: Password cannot be blank.'
//       });
//     }
//     email = email.toLowerCase();
//     email = email.trim();
//     // Steps:
//     // 1. Verify email doesn't exist
//     // 2. Save
//     User.find({
//       email: email
//     }, (err, previousUsers) => {
//       if (err) {
//         return res.send({
//           success: false,
//           message: 'Error: Server error'
//         });
//       } else if (previousUsers.length > 0) {
//         return res.send({
//           success: false,
//           message: 'Error: Account already exist.'
//         });
//       }
//       // Save the new user
//       const newUser = new User();
//       newUser.email = email;
//       newUser.password = newUser.generateHash(password);
//       newUser.save((err, user) => {
//         if (err) {
//           return res.send({
//             success: false,
//             message: 'Error: Server error'
//           });
//         }
//         return res.send({
//           success: true,
//           message: 'Signed up'
//         });
//       });
//     });
//   }); // end of sign up endpoint
// };

//POST route on registration/login on click "submit"- creates new User
routes.post('/registration', function (req, res, next) {
  console.log("HERE");
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("Passwords do not match. Please confirm password.");
    return next(err);
  }

  if (req.body.company &&
    req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.phone &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    console.log("HERE2");

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
        let transporter = nodemailer.createTransport({
          // create reusable transporter object using the default SMTP transport
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

          // only needed when using pooled connections
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
            res.redirect("../profile");
          }
          else {
            console.log("Error authenticating user: no err")
          }
        });
      }
    });
  }
});


// GET route after registering
routes.get('/profile', function (req, res, next) {
  User.findById(req.session.userId)
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
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
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