var express = require('express');
var router = express.Router();

// 首页
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index/index',{
		dir:'index',
		subTitle: '主页'
	});
});

// 验证是否登陆
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated() || req.session.admin){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

module.exports = router;
