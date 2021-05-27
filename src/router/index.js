import Vue from 'vue'
import Router from 'vue-router'
import  routes from './routers'

Vue.use(Router)


export default new Router({
  // 采用 history 模式,没有难看的 '#'
  mode: 'history',
  // 在history模式下,通过返回{x:Number,y:Number}控制跳转后新界面的滚动位置
  scrollBehavior: () => ({ y: 0 }),
  // 挂载路由
  routes
})

