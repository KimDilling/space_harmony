var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Space Harmony', name: [] });
});

/* POST when the user "likes" a new Spacer. */
router.post('/likes', function(req, res, next) {
	//if like = true {
		//name.collection.prepend({});

	// } 
});

module.exports = router;
