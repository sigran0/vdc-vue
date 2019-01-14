
import Vue from 'vue'
import Home from './page/Home'
import Qna from './page/Qna'
import Start from './page/Start'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/start' },
    { path: '/start', component: Start, props: (route) => ({ batch: route.query.batch }) },
    { path: '/home', component: Home },
    { path: '/qna', component: Qna }
]

const router = new VueRouter({
    routes
})

export default router