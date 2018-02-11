const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {

});

router.get('/survey', (req, res) => {

});
// router.get('/', (req, res) => {
//     res.send('You have hit the / route!');
// });

// router.get('/about/:userName', (req, res) => {
//     userName = req.params.userName;
//     res.send(`You have hit the /about/${userName} route!`);
// });

// router.get('/bubbles', (req, res) => {
//     res.send('You have hit the /bubbles route!');
// });

module.exports = {
    router
};