const mongoose = require('mongoose');
const itinerarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    profile_picture: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    hashtag: {
        type: String,
        required: true,
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'city',
        required: true
    }
})

module.exports = mongoose.model('itinerary', itinerarySchema)