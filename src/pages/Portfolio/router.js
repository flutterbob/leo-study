import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/pages/Portfolio/components/portfolio.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/portfolio.html',
            component: Portfolio
        }
    ]
})