const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'city',
    }]
})

module.exports = mongoose.model('activity', activitySchema)