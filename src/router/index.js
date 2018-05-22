import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve=>require(['../components/page/Login.vue'],resolve)
    } ,
    {
      path: '/',
      component: resolve=>require(['../components/page/Dashboard.vue'],resolve)
    }
  ]
})
