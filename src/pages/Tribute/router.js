import Vue from 'vue'
import Router from 'vue-router'
import Tribute from '@/pages/Tribute/components/tribute.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/tribute.html',
            component: Tribute
        }
    ]
})
