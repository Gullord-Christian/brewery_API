const Brewery = require('../models/brewery.model')

// to test routes are working
module.exports.index = (req, res) => {
    res.json({
        message: "Hello world"
    })
}

module.exports.getAllBreweries = (req, res) => {
    Brewery.find({})
        .then(breweries => res.json(breweries))
        .catch(err => res.json(err))
}

module.exports.createBrewery = (req, res) => {
    const { breweryName, breweryType, address, city, state, postalCode, country, phone } = req.body;
    Brewery.create(req.body)
        .then(brewery => res.json(brewery))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneBrewery = (req, res) => {
    Brewery.findOne({ _id: req.params.id })
        .then(brewery => res.json(brewery))
        .catch(err => res.json(err))
}

module.exports.updateBrewery = (req, res) => {
    Brewery.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(updatedBrewery => res.json(updatedBrewery))
        .catch(err => res.status(400).json(err))
}


module.exports.deleteBrewery = (req, res) => {
    Brewery.deleteOne({ _id: req.params.id })
        .then(deleteOne => res.json(deleteOne))
        .catch(err => res.json(err))
}