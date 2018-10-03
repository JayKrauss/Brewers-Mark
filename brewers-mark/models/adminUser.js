const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


// Saving a reference to the Schema constructor
const Schema = mongoose.Schema;

<<<<<<< HEAD
// Schema constructor that creates a new UserSchema object
=======
// Schema constructor, creates new adminUserSchema object
>>>>>>> e0f4c9dda609853f65e01b09284e262e7ab3a7a2
const adminUserSchema = new Schema({
  company: {
    type: String
  },

  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  email: {
    type: String,
    unique: true,
    required: "A valid email address is required.",
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  phone: {
    type: String
    // validate: {
    //   validator: function(v) {
    //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid phone number!`
    // },
  },  

  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is required."
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password needs to be a minimum of 6 characters."
    ]
  },

  passwordConf: {
    type: String,
    trim: true,
    required: "Please retype to confirm your password.",
    required: true,
  },

  userCreated: {
    type: Date,
    default: Date.now
  },
  
});

<<<<<<< HEAD
//hashing password before saving it to the database
=======
// Hashing password before saving it to the database
>>>>>>> e0f4c9dda609853f65e01b09284e262e7ab3a7a2
adminUserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

<<<<<<< HEAD
//hashing passwordConf before saving it to the database
=======
// Hashing passwordConf before saving it to the database
>>>>>>> e0f4c9dda609853f65e01b09284e262e7ab3a7a2
adminUserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.passwordConf, 10, function (err, hash) {
    if(err) {
      return next(err);
    }
    user.passwordConf = hash
    next();
  })
});

<<<<<<< HEAD
// Model created from the above schema, using mongoose's model method
=======
// Creating model from the above schema, using mongoose's model method
>>>>>>> e0f4c9dda609853f65e01b09284e262e7ab3a7a2
const adminUser = mongoose.model("adminUser", adminUserSchema);
console.log(adminUser);

// Exporting the adminUser model
module.exports = adminUser;
