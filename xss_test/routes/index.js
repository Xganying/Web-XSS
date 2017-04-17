var express = require('express');
var router = express.Router();

var comment = {};

// encode 
function html_encode(str){
	var s = '';l
	if(str.length == 0 )
		return 0;
	s = str.replace(/&/g, "&gt;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/\s/g, "&nbsp;");
	s = s.replace(/\'/g, "&#39;");
	s = s.replace(/\"/g, "&quot;");
	s = s.replace(/\n/g, "<br>;");
	return s;

/* GET home page. */
router.get('/', function(req, res) {
 	res.render('index', { title: 'Express' });
}); 

/*set comment*/
router.get('/comment', function(req, res, next){
	comment.v = html_encode(req.query.comment);

});

router.get('/getComment', function(req, res, next){
	res.json({
		comment: commentts.v;
	});
});

module.exports = router;
