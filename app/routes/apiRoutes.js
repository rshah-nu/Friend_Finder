const express = require('express');
var router = express.Router();

const friendsData = require('../data/friends');

router.get('/friends', (req, res) => {
    res.json(friendsData.userData);
});

router.post('/friends', (req, res) => {
    var userMatch = {
        name: "",
        photo: "",
        friendDifference: 9999
    };
    var currentUser = req.body;
    var currentUserScores = (currentUser['scores[]']);
    
    if(friendsData.userData.length === 0){
        friendsData.userData.push(currentUser);
        res.send('Sorry! There is no one else in the database for you to match with!');
    }
    else {
        for (var i = 0; i < friendsData.userData.length; i++) {
            var friendDifference = 0;
            var storedScores = friendsData.userData[i]['scores[]'];
            for (var j = 0; j < friendsData.userData[i]['scores[]'].length; j++){
                friendDifference += Math.abs(parseInt(storedScores[j]) - parseInt(currentUserScores[j]));
            };
            if (friendDifference < userMatch.friendDifference){
                userMatch.name = friendsData.userData[i].name;
                userMatch.photo = friendsData.userData[i].photo;
                userMatch.friendDifference = friendDifference;
            };
        };
        friendsData.userData.push(currentUser)
        res.json(userMatch);
    };

});

module.exports = {
    router
};