
import Vue from 'vue'
import Home from './page/Home'
import Qna from './page/Qna'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/qna', component: Qna }
]

const router = new VueRouter({
    routes
})

export default router