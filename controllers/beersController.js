const db = require("../models");

module.exports = {
    findAndFilterBeers: function (req, res) {
        db.Beer
            .find({ beer_style: new RegExp(req.query.child, "i") })
            .sort({ total_count: -1 })
            .then(beers => beers.filter(beer => beer.beer_style.includes(req.query.parent)))
            .then(beers => res.json(beers))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Beer
            .find(req.query)
            .sort({ total_count: -1 })
            .then(beers => res.json(beers))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Beer
            .find({ bid: req.params.id })
            .then(beer => res.json(beer))
            .catch(err => res.status(422).json(err));
    },

    findName: function (req, res) {
        db.Beer
            .find({ beer_name: `/${req.params.name}/` })
            .then(beer => res.json(beer))
            .catch(err => res.status(422).json(err));
    },

    findRandom: function (req, res) {
        db.Beer
            .aggregate([{ $sample: { size: 1 } }])
            .then(random => res.json(random))
            .catch(err => res.status(422).json(err));
    }

    /*

    ADD ROUTES FOR PUT AND DELETE:

    PUT: attach beer id to specific user's favorites

    DELETE: remove specific beer id (bid in mongo) from list


    */


}






// Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.Book
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Book
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
