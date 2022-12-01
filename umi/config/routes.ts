export default [
  { path: '/', redirect: '/home' },
  {
    icon: 'HomeOutlined',
    path: '/home',
    name: '首页',
    component: './home/index'
  },
  {
    icon: 'ProfileOutlined',//antd 图标名称
    path: '/profile',
    name: '个人中心',
    component: './profile/index',
    hideInMenu: true
  },
  {
    icon: 'UserOutlined',//antd 图标名称
    path: '/user',
    name: '用户管理',
    component: './user/index',
    routes: [
      {
        icon: 'FileAddOutlined',
        name: '添加用户',
        path: "/user/add",
        component: './user/add/index',
        access: 'adminCan'
      },
      {
        icon: 'FileSearchOutlined',
        name: '用户列表',
        path: "/user/list",
        component: './user/list/index'
      },
      { icon: 'FileOutlined', name: '用户详情', path: "/user/detail/:id", component: './user/detail/index', hideInMenu: true }
    ]
  },
  {
    path: '/signup',
    name: '注册',
    component: './signup/index',
    hideInMenu: true,
    layout: false
  },
  {
    path: '/signin',
    name: '登录',
    component: './signin/index',
    hideInMenu: true,
    layout: false
  },
]