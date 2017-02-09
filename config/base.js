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
    to:'717995589@qq.com'
  }
}
