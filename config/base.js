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
    title: '模块1',
    icon: 'fa fa-bell-o',
    subMunu: [{
      title: '子菜单1',
      to: '/1'
    }, {
      title: '子菜单2',
      to: '/2'
    }, {
      title: '子菜单3',
      to: '/3'
    }]
  }, {
    title: '模块2',
    icon: 'fa fa-bell-o',
    subMunu: [{
      title: '子菜单4',
      to: '/1'
    }, {
      title: '子菜单5',
      to: '/2'
    }, {
      title: '子菜单6',
      to: '/3'
    }]
  }, {
    title: '模块3',
    icon: 'fa fa-bell-o',
    subMunu: [{
      title: '子菜单7',
      to: '/1'
    }, {
      title: '子菜单8',
      to: '/2'
    }, {
      title: '子菜单9',
      to: '/3'
    }]
  }]
}
