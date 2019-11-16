import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import Toast from 'components/common/Toast'
Vue.use(Toast)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue;

 FastClick.attach(document.body) //消除移动端300ms的延迟
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
