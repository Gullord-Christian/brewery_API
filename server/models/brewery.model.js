const mongoose = require('mongoose');

const BrewerySchema = new mongoose.Schema({
    breweryName: {
        type: String,
        required: [true, "Name must be provided."]
    },
    breweryType: {
        type: String,
        required: [true, "Must enter brewery type."]
    },
    address: {
        type: String,
        required: [true, "Must enter address"]
    },
    city: {
        type: String,
        required: [true, "Must enter city."]
    },
    state: {
        type: String,
        required: [true, "Must enter state."]
    },
    postalCode: {
        type: Number,
        required: [true, "Must enter postal code."]
    },
    country: {
        type: String,
        required: [true, "Must enter country."]
    },
    phone: {
        type: Number,
        required: [true, "Must enter phone number."]
    }
}, { timestamps: true })

module.exports = mongoose.model("Brewery", BrewerySchema)