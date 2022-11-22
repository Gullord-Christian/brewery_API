const express = require("express");

const app = express();
const cors = require('cors');


require('../server/config/mongoose.config')

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors())


require('../server/routes/brewery.routes')(app);


app.listen(8000, () => console.log("Listening to port: 8000"))