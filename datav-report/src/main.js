import Vue from 'vue'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
import App from './App'
import router from './router'
import './plugins/element'
import './plugins/vcharts'
import './style/index.scss'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('VueECharts', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
