const express = require('express')

const router = express.Router()

router.get('/test', (req, res) => {
    res.send({
        msg: 'Cities test route.'
    })
})

module.exports = router;

const cityModel = require('../model/cityModel')

router.get('/all',
    (req, res) => {
        cityModel.find()
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

router.post('/', (req, res) => {
    console.log(req.body)
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country,
        image: req.body.image
    })

    // verify if city exists
    // 1. get all cities from DB
    // 2. iterate through all cities and verify if city already in there
    // 2.1 if existing, return error
    // 2.2 if not existing, save to db


    cityModel.find()
        .then(cities => {
            if (cities.filter(city => city.name === newCity.name).length > 0) {
                res.status(400).send("The city already exists in the database")
            } else(
                newCity.save()
                .then(city => {
                    res.send(city)
                })
                .catch(err => {
                    res.status(500).send("Server error")
                })
            )
        })
        .catch(err => console.log(err));
});

router.get('/:name',
    (req, res) => {
        let cityRequested = req.params.name;
        cityModel.findOne({
                name: cityRequested
            })
            .then(city => {
                res.send(city)
            })
            .catch(err => console.log(err));
    });