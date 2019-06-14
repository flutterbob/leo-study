import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/About/components/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      beforeEnter() {
        window.location = '/'
      }
    },
    {
      path: '/about.html',
      component: About
    },
    {
      path: '/scssSt',
      beforeEnter() {
        window.location = '/scssSt.html'
      }
    }
  ]
})
