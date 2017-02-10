var express = require('express');
var router = express.Router();
var util = require('../util/base');

// 首页
router.get('/', function(req, res){
	res.render('index/index',{
		dir:'index',
		subTitle: '访问统计'
	});
});

router.get('/visits-users', function(req, res) {
  res.render('visits-users/index', {
    dir: 'visits-users',
    subTitle: '用户统计'
  });
});

module.exports = router;
