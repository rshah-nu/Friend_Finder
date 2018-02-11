const express = require('express');
var router = express.Router();

const friendsData = require('../data/friends');

router.get('/friends', (req, res) => {
    res.json(friendsData.userData);
});

router.post('/friends', (req, res) => {
    friendsData.userData.push(req.body);
    res.send('Got it!');
});

module.exports = {
    router
};