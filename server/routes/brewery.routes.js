// connecting to the controller
const BreweryController = require('../controllers/brewery.controller')

// test route to ensure route is connected
module.exports = (app) => {
    app.get('/api', BreweryController.index) // test
    app.get('/api/brewery/:id', BreweryController.getOneBrewery)
    app.get('/api/breweries', BreweryController.getAllBreweries)
    app.post('/api/brewery', BreweryController.createBrewery)
    app.put('/api/brewery/:id', BreweryController.updateBrewery)
    app.delete('/api/brewery/:id', BreweryController.deleteBrewery)
}
