const router = require("express").Router();
const adminRoutes = require("./admin");

// Book routes
router.use("/admin", adminRoutes);

module.exports = router;
