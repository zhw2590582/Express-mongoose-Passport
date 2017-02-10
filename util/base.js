var glob = require('glob');
var base = require('../config/base');

//获取webpack的hash值
var getHash = function(globPath) {
  var name = glob.sync(globPath)[0];
  var len = name.split('.').length - 2;
  if (len === 2) {
    return '.' + name.split('.')[2];
  } else {
    return false
  }
};

//验证是否内部账户
var adminAccount = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var verify = false;
  base.account.forEach(function(item) {
    if (item.name === username && item.password === password) {
      verify = true;
      return;
    }
  })

  if (verify) {
    req.session.admin = true;
    req.flash('success_msg', '登录成功');
    res.redirect('/');
  } else {
    next()
  }
}

//是否允许注册
var registerAble = function (req, res, next) {
  if (base.registerAble) {
    next()
  } else {
    req.flash('error_msg', '暂不允许注册用户');
    res.redirect('/account/login');
  }
}

// 主页验证是否登陆
var indexAuthenticated = function (req, res, next){
	if(req.isAuthenticated() || req.session.admin){
		return next();
	} else {
		res.redirect('/account/login');
	}
}

// 内页验证是否登陆
var pageAuthenticated = function (req, res, next){
  if(req.isAuthenticated() || req.session.admin){
    res.redirect('/');
	} else {
		return next();
	}
}

module.exports = {
  getHash,
  adminAccount,
  registerAble,
  indexAuthenticated,
  pageAuthenticated
}
