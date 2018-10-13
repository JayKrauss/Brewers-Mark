const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Matches with "/api/beers"
router.route("/")
  .get(beersController.findAll);

router.route("/v2")
  .get(beersController.findAndFilterBeers);

// Route /api/beers/random
router.route("/random")
    .get(beersController.findRandom);


// Route /api/beers/search/[beerName]
router.route("/search/:name")
    .get(beersController.findName);


// Route /api/[bid]
router
  .route("/:id")
  .get(beersController.findById);

module.exports = router;
