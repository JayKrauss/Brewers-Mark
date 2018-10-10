const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    beer_name: { type: String, required: true },
    beer_description: { type: String, required: true },
    beer_slug: { type: String, required: true },
    beer_style: { type: String, required: true },
    beer_ibu: { type: Number, required: true },
    beer_abv: { type: Number, required: true },
    bid: { type: Number, required: true },
    is_in_production: { type: Boolean, required: true },
    total_count: { type: Number, required: true },
    rating_count: { type: Number, required: true },
    rating_score: { type: Number, required: true },
    //brewery info below, not beer specific
    brewery_name: { type: String, required: true },
    brewery_id: { type: Number, required: true }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
