import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base',
      component: resolve => (require(['@/pages/basecomponent/index.vue'], resolve))
    },
    {
      path: '/base',
      name: 'basecomponent',
      component: resolve => (require(['@/pages/basecomponent/index.vue'], resolve))
    },
    {
      path: '/form',
      name: 'formcomponent',
      component: resolve => (require(['@/pages/form/index.vue'], resolve))
    },
    {
      path: '/other',
      name: 'othercomponent',
      component: resolve => (require(['@/pages/other/index.vue'], resolve))
    }
  ]
})
