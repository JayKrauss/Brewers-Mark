const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const beerSchema = new Schema ({
    beer: {type: Object, required: true },

});

module.exports = Beer;