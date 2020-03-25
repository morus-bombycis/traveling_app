const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: false,
    },
    prefecture: {
        type: String,
        required: false,
    },
    district: {
        type: String,
        required: false,
    },
    county: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('city', citySchema)
module.exports.schema = citySchema