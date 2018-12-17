import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
