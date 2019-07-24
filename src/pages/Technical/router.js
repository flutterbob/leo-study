import Vue from 'vue'
import Router from 'vue-router'
import Technical from '@/pages/Technical/components/technical.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/technical.html',
            component: Technical
        }
    ]
})