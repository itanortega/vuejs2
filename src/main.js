import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import EventBus from '@/plugins/event-bus'
import store from '@/store'
import routes from '@/routes'
import mstoMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(mstoMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
