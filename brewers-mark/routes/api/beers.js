const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Matches with "/api/beers"
router.route("/")
  .get(beersController.findAll);
//   .post(beersController.create);


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
//   .delete(beersController.remove);

module.exports = router;
