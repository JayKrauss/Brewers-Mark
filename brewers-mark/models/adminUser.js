// const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');


// // Saving a reference to the Schema constructor
// const Schema = mongoose.Schema;


// // Schema constructor that creates a new UserSchema object
// const adminUserSchema = new Schema({
//   company: {
//     type: String
//   },

//   firstName: {
//     type: String
//   },

//   lastName: {
//     type: String
//   },

//   email: {
//     type: String,
//     unique: true,
//     required: "A valid email address is required.",
//     trim: true,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//   },

//   phone: {
//     type: String
//     // validate: {
//     //   validator: function(v) {
//     //     return /\d{3}-\d{3}-\d{4}/.test(v);
//     //   },
//     //   message: props => `${props.value} is not a valid phone number!`
//     // },
//   },  

//   username: {
//     type: String,
//     unique: true,
//     trim: true,
//     required: "Username is required."
//   },

//   password: {
//     type: String,
//     trim: true,
//     required: "Password is required.",
//     validate: [
//       function(input) {
//         return input.length >= 6;
//       },
//       "Password needs to be a minimum of 6 characters."
//     ]
//   },

//   passwordConf: {
//     type: String,
//     trim: true,
//     required: "Please retype to confirm your password.",
//     required: true,
//   },

//   userCreated: {
//     type: Date,
//     default: Date.now
//   },
  
// });

// hashing password before saving it to the dat
// adminUserSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });

// //hashing passwordConf before saving it to the database
// adminUserSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.passwordConf, 10, function (err, hash) {
//     if(err) {
//       return next(err);
//     }
//     user.passwordConf = hash
//     next();
//   })
// });

// // Model created from the above schema, using mongoose's model method
// const adminUser = mongoose.model("adminUser", adminUserSchema);

// // Exporting the adminUser model
// module.exports = adminUser;
