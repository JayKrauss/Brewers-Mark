
const express = require("express");
const bodyParser = require("body-parser");
const logger = require('morgan');
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const routes = require("./routes");
const cookieParser = require('cookie-parser');

const app = express();

const PORT = process.env.PORT || 3001;

// connect to Mongo Database with Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adminAuthDB", { useNewUrlParser: true });
var db = mongoose.connection;
//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Mongo DB Connected")
});

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(cookieParser());

//use sessions for tracking logins
 app.set('trust proxy', 1) // trust first proxy


app.use(session({
  secret: 'drink it up',
  resave: true,
  saveUninitialized: false,
  cookie: { secure: true },
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// catch 404 and forward to error handler if neccessary
// app.use(function(req, res, next) {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler-define as the last app.use callback
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.json('error', {
//     message: err.message,
//     error: {}
//   });
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
