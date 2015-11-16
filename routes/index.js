var express = require('express');
var router = express.Router();

var Characters = require('../models/user');
var randomIndex = -1;

router.get('/', function(req, res, next) {
    Characters.find({},function(err,sup){
        if (randomIndex === sup.length -1)
        {
            randomIndex = -1;
        }
        randomIndex ++;
        var randomPic = sup[randomIndex].img;
        res.render('index', { title: 'Space Harmony', sup: randomPic});
    });
});

router.get('/add', function(req, res, next) {
    var newCompliment = "heyyyyy";
    var insertDocument = function(){
        Characters.collection.insert({compliment : newCompliment});
    };
    insertDocument();
    console.log(newCompliment);
    // USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
    res.redirect('/');
});

/* POST when the user "likes" a new Spacer. */

module.exports = router;
