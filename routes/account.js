var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var util = require('../util/base');

var User = require('../models/account');

// 注册页面
router.get('/register', util.registerAble, function(req, res) {
  res.render('register/index', {
    dir: 'register',
    layout: 'login',
    subTitle: '注册'
  });
});

// 登录页面
router.get('/login', function(req, res) {
  res.render('login/index', {
    dir: 'login',
    layout: 'login',
    subTitle: '登录'
  });
});

// 注册用户
router.post('/register', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  // 验证
  req.checkBody('name', '昵称不能为空').notEmpty();
  req.checkBody('email', '邮件不能为空').notEmpty();
  req.checkBody('email', '邮件格式错误').isEmail();
  req.checkBody('username', '用户名不能为空').notEmpty();
  req.checkBody('password', '密码不能为空').notEmpty();
  req.checkBody('password2', '两次密码不匹配').equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    res.render('register/index', {
      dir: 'register',
      layout: 'login',
      errors: errors
    });
  } else {

    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password
    });

    User.createUser(newUser, function(err, user) {
      if (err) throw err;
      console.log(user);
    });

    req.flash('success_msg', '注册成功，马上登录吧');
    res.redirect('/account/login');
  }
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, {
          message: '未知用户'
        });
      }

      User.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: '密码错误'
          });
        }
      });
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// 用户登录
router.post('/login',
  util.adminAccount,
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/account/login',
    failureFlash: true
  }),
  function(req, res) {
    req.flash('success_msg', '登录成功');
    res.redirect('/');
  });

// 用户登出
router.get('/logout', function(req, res) {
  req.logout();
  req.session.admin = false;
  req.flash('success_msg', '登出成功');
  res.redirect('/account/login');
});

module.exports = router;
