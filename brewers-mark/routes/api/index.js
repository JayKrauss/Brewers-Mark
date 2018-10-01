const router = require("express").Router();
const adminSignUpRoute = require("./admin.js");

// Admin routes
router.use("/admin/registration", adminSignUpRoute);

module.exports = router;
