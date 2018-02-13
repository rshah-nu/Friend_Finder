const express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

module.exports = {
    router
};