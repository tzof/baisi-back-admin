import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 路由全局导航
import 'router/permission.js'
// 导入ant组件
import 'plugins/ant.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
