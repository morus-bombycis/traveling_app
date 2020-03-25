const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const db = require('./key').mongoURI;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const mongoose = require("mongoose");

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('Connection to Mongo DB established'))
  .catch(err => console.log(err));

app.use('/cities', require('./routes/cities'))
app.use('/itineraries', require('./routes/itineraries'))
app.use('/activities', require('./routes/activities'))