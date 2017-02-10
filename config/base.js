module.exports = {
  webTitle: '老赵茶馆',
  keywords: '前端, 设计, Wordpress',
  description: '搭建全栈APP',
  registerAble: false, //是否允许注册
  account: [{ //管理员账户列表
      name: 'admin',
      password: 'admin',
      role: 'admin'
    },
    {
      name: 'guest',
      password: 'guest',
      role: 'guest'
    }
  ],
  mailStmp: { //邮箱配置
    service: 'qq',
    prot: 25,
    auth: {
      user: '717995589@qq.com',
      pass: 'password'
    },
    to: '717995589@qq.com'
  },
  menu: [{ //菜单配置
    title: '总览',
    icon: 'fa fa-tachometer',
    to: '/',
    subMunu: [{
      title: '访问统计',
      to: '/'
    }, {
      title: '用户统计',
      to: '/visits-users'
    }]
  }, {
    title: '模块',
    icon: 'fa fa-cubes',
    to: '/posts',
    subMunu: [{
      title: '文章',
      to: '/posts'
    }, {
      title: '页面',
      to: '/pages'
    }]
  }, {
    title: '用户',
    icon: 'fa fa-users',
    to: '/users',
    subMunu: [{
      title: '全部用户',
      to: '/users'
    }, {
      title: '添加用户',
      to: '/user-new'
    }, {
      title: '个人资料',
      to: '/profile'
    }]
  }, {
    title: '资源',
    icon: 'fa fa-puzzle-piece',
    subMunu: [{
      title: '资源1',
      to: '/1'
    }, {
      title: '资源2',
      to: '/2'
    }]
  }, {
    title: '配置',
    icon: 'fa fa-sliders',
    subMunu: [{
      title: '配置1',
      to: '/1'
    }, {
      title: '配置2',
      to: '/2'
    }]
  }]
}
