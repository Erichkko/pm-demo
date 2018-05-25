import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      component: resolve=>require(['../components/page/Login.vue'],resolve)
    } ,
    {
      path: '/',
      component: resolve=>require(['../components/common/Home.vue'],resolve),
      meta: { title: '自述文件' },
      children:[{
        path: '/dashboard',
        component: resolve=>require(['../components/page/Dashboard.vue'],resolve),
        meta: { title: '系统首页' }
      },{
        path: '/404',
        component: resolve=>require(['../components/page/404.vue'],resolve),
        meta: { title: '404' }
      },{
        path: '/403',
        component: resolve=>require(['../components/page/403.vue'],resolve),
        meta: { title: '403' }
      },{
        path: '/table',
        component: resolve=>require(['../components/page/BaseTable.vue'],resolve),
        meta: { title: '基础表格' }
      },{
        path: '/tabs',
        component: resolve=>require(['../components/page/TabCards.vue'],resolve),
        meta: { title: '选项卡' }
      },{
        path: '/permission',
        component: resolve=>require(['../components/page/PermissonTest.vue'],resolve),
        meta: { title: '权限测试', permission: true }
      },
      ]
    }
  ]
})
