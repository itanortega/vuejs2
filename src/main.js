import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import EventBus from '@/plugins/event-bus'
import routes from '@/routes'
import mstoMm from '@/filters/ms-to-mm'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(mstoMm)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
