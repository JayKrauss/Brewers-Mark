const router = require("express").Router();
const adminSignUpRoute = require("./adminRoute.js");
const beerRoutes = require("./beers.js");

// Admin routes
router.use("/admin", adminSignUpRoute);
router.use("/beers", beerRoutes);

module.exports = router;
