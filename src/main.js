import Vue from 'vue'
import index from './index'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: { index },
  template: '<index/>'
})
