
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/brewerydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong', err));