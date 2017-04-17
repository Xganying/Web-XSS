var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,next) {
	res.set('X-XSS-Protection', 0);  // Set the browser without blocking
	res.render('index', { title: 'Express', xss: req.query.xss });
});

module.exports = router;
