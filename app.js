var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cors = require('cors');
var morgan = require('morgan');
var compression = require('compression');
var helmet = require('helmet');
var glob = require('glob');

//基础配置
var base = require('./config/base');

//函数工具
var util = require('./util/base');

// 初始化
var app = express();

// 打印日志
//app.use(morgan('common'));

// 合并请求
app.use(compression());

// 保护API
app.use(helmet());

// 视图引擎
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
  partialsDir: 'views/common/partials',
  layoutsDir: 'views/layouts',
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// 静态目录
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// 公共的端口
app.use(cors({
  origin: ['http://localhost:3001'],
  methods: ['GET', 'POST'],
  alloweHeaders: ['Conten-Type', 'Authorization']
}));

// Passport 初始化
app.use(passport.initialize());
app.use(passport.session());

// Express 表单验证
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// 提示信息
app.use(flash());

// 全局变量
app.use(function(req, res, next) {
  // 获取webpack的hash值
  var hash = util.getHash('./public/js/*.js');

  // 向浏览器暴露一个全局对象
  var app_state = {
    login: req.isAuthenticated() || req.session.admin || false,
    page: req.originalUrl
  }

  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || req.session.admin || null;
  res.locals.base = base;
  res.locals.hash = hash || '';
  res.locals.APP_STATE = JSON.stringify(app_state);
  next();
});

// 所有页面验证登陆
app.use('*', util.isLogin);

//批量引入路由页面
var requireRoutes = function(routesDir) {
  var routesArr = glob.sync(routesDir);
  routesArr.forEach(function(route) {
    var name = route.split('./routes/')[1].split('.js')[0];
    var dir = name === 'index' ? '/' : '/' + name;
    app.use(dir,require(route));
    //console.log(dir,route);
  })
};
requireRoutes('./routes/*.js');

// 捕捉错误
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error/index', {
    dir: 'error',
    layout: 'error',
    subTitle: '出错了'
  });
});

// 设置端口
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});
