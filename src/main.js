import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'expose-loader?$!expose-loader?jQuery!jquery'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
