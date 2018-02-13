require('dotenv').config()
const environment = process.env.NODE_ENV || 'development';

const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./app/routes/apiRoutes');
const htmlRoutes = require('./app/routes/htmlRoutes');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRoutes.router);
app.use('/', htmlRoutes.router);

app.listen(PORT, () => {
    console.log(`Express is listening on port ${PORT}`);
});

