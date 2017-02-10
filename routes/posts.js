var express = require('express');
var router = express.Router();

// 文章
router.get('/', function(req, res){
	res.render('posts/index',{
		dir:'posts',
		subTitle: '文章管理'
	});
});

module.exports = router;
