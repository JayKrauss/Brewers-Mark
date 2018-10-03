const router = require("express").Router();
const adminSignUpRoute = require("./adminRoute.js");

// Admin routes
router.use("/admin", adminSignUpRoute);

module.exports = router;
