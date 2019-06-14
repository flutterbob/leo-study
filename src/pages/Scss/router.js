import Vue from 'vue'
import Router from 'vue-router'
import ScssSt from '@/pages/Scss/components/ScssSt'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "",
            beforeEnter() {
                window.location = 'index.html'
            }
        },
        {
            path: '/about',
            beforeEnter() {
                window.location = 'about.html'
            }
        },
        {
            path: '/scssSt',
            component: import('@/pages/Scss/components/ScssSt')
            // beforeEnter() {
            //     window.location = 'scssSt.html'
            // }
        }
    ]
})