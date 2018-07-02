// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'begeta/css/begeta.min.css'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.config.productionTip = false

Vue.component('VuePerfectScrollbar', VuePerfectScrollbar)

Vue.use(Buefy)
Vue.use(VueSweetalert2)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
