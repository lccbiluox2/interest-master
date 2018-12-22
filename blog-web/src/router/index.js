import Vue from 'vue'
import Router from 'vue-router'

//懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)
const Index = resolve => require(['@/components/Index'], resolve)
const Blog = resolve => require(['@/components/blog/blog'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/write',
      name: 'writeBlog',
      component: Blog
    }
  ]
})
