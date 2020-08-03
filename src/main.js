import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store'
import './config/rem'
import FastClick from 'fastclick'
import MyAxios from '@/service'
// 将API方法绑定到全局
Vue.prototype.$MyAxios = MyAxios
Vue.config.productionTip = false
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
