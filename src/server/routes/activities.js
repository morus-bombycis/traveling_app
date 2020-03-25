const express = require('express')

const router = express.Router()
const activityModel = require('../model/activityModel')

router.get('/:cityId',
    (req, res) => {
        let cityId = req.params.cityId;
        activityModel.find({
                cities: {
                    $in: [cityId, undefined]
                }
            })
            .populate({
                path: 'cities'
            })
            .then(itinerary => {
                res.send(itinerary)
            })
            .catch(err => console.log(err));
    });

module.exports = router;