import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      beforeEnter() {
        window.location = '/about.html'
      }
    },
    {
      path: '/scssSt',
      beforeEnter() {
        window.location = '/scssSt.html'
      }
    },
    {
      path: '/tribute',
      beforeEnter() {
        window.location = '/tribute.html'
      }
    },
    {
      path: '/survey',
      beforeEnter() {
        window.location = '/survey.html'
      }
    },
    {
      path: '/product',
      beforeEnter() {
        window.location = '/product.html'
      }
    },
    {
      path: '/technical',
      beforeEnter() {
        window.location = '/technical.html'
      }
    },
    {
      path: '/portfolio',
      beforeEnter() {
        window.location = '/portfolio.html'
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/pages/About/About.vue')
    // }
  ]
})
