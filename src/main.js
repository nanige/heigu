// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Vant from 'vant'
import api from '@/api/api'
import 'vant/lib/vant-css/index.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vant)
Vue.prototype.$http = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {

  }
})
