var express = require('express');
var router = express.Router();
var util = require('../util/base');

// 首页
router.get('/', util.indexAuthenticated, function(req, res){
	res.render('index/index',{
		dir:'index',
		subTitle: '主页'
	});
});

module.exports = router;
