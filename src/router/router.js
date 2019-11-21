import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: resolve => require(['@/App.vue'], resolve),
      children: [
        {
          path: '/home',
          component: resolve => require(['@/views/Home.vue'], resolve)
        },
        {
          path: '/login',
          component: resolve => require(['@/views/Login.vue'], resolve)
        },
        {
          path: '/city/:cityid',
          component: resolve => require(['@/views/City.vue'], resolve)
        }
      ]
    }
  ]
})
