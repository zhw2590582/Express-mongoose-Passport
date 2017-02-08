var express = require('express');
var router = express.Router();

// 首页
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index/index',{
		dir:'index',
		subTitle: false
	});
});

// 验证是否登陆
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

module.exports = router;
