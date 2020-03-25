const express = require('express')

const router = express.Router()

router.get('/test', (req, res) => {
    res.send({
        msg: 'Itineraries test route.'
    })
})

module.exports = router;

const itineraryModel = require('../model/itineraryModel')

router.get('/all',
    (req, res) => {
        itineraryModel.find()
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

router.post('/', (req, res) => {
    console.log(req.body)
    const Itinerary = new itineraryModel({
        name: req.body.name,
        country: req.body.country,
        image: req.body.image
    })

    // verify if city exists
    // 1. get all cities from DB
    // 2. iterate through all cities and verify if city already in there
    // 2.1 if existing, return error
    // 2.2 if not existing, save to db


    itineraryModel.find()
        .then(itineraries => {
            if (itineraries.filter(Itinerary => Itinerary.name === newItinerary.name).length > 0) {
                res.status(400).send("The itinerary already exists in the database")
            } else(
                newItinerary.save()
                .then(itinerary => {
                    res.send(itinerary)
                })
                .catch(err => {
                    res.status(500).send("Server error")
                })
            )
        })
        .catch(err => console.log(err));
});

router.get('/:cityId',
    (req, res) => {
        let cityId = req.params.cityId;
        itineraryModel.find({
                city: cityId
            })
            .populate({
                path: 'city'
            })
            .then(itinerary => {
                res.send(itinerary)
            })
            .catch(err => console.log(err));
    });