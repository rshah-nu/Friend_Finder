const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('You have hit the /api/ route!');
});

router.get('/about', (req, res) => {
    res.send('You have hit the /api/about route!');
});

module.exports = {
    router
};