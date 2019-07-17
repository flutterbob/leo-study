import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/pages/Product/components/product.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/product.html',
            component: Product
        }
    ]
})