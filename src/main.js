import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import 'vuetify/dist/vuetify.min.css'

import axios from 'axios'

Vue.use(Vuetify)
Vue.use(Vuex)

Vue.prototype.$http = axios

Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app')
