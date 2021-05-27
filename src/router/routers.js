const  routers = [
  {
    // 配置重定向页面 将进入项目的路径 / 重定向到 home
    path: '/',
    redirect: '/home'
  },
  { path: '/login',
    // 为路由配置mata对象用于路由跳转时动态改变网页标题
    meta: { title: '登录', myVal: true },
    component: () => import('@/views/Login'),
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    meta: { title: '首页', icon: 'index', affix: true, noCache: true }
  },
  // 如果没有匹配到前面的路由就会进入 404 界面
  {
    path: '*',
    name: '404',
    component: () => import('@/views/page/404')
  }
]
export default routers