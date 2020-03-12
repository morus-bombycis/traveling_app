const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const db = require('./key').mongoURI;

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

const mongoose = require("mongoose");

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

app.use('/cities', require('./routes/cities'))