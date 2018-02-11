const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('You have hit the / route!');
});

router.get('/about', (req, res) => {
    res.send('You have hit the /about route!');
});

router.get('/bubbles', (req, res) => {
    res.send('You have hit the /bubbles route!');
});

module.exports = {
    router
};