
import Vue from 'vue'
import app from './App.vue'

import axios from 'axios'

import VueAxios from 'vue-axios'

import VueOffline from 'vue-offline'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'

import router from './router';
import { store } from './store';

Vue.use(VueAxios, axios)

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(AOS)
Vue.use(VueOffline)

Vue.config.productionTip =  true

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')


