require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
});

