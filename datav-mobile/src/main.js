import Vue from 'vue'
import App from './App.vue'
import router from './router'

/**目前vue-echarts还不支持echarts5.0*/
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'

import './styles/reset.scss'

Vue.prototype.$echarts = ECharts
Vue.prototype.$bmap = window.BMap
Vue.prototype.$bmapgl = window.BMapGL
Vue.prototype.$initMap = window.initMap
Vue.prototype.$mapvgl = window.mapvgl
Vue.prototype.$mapv = window.mapv
Vue.prototype.$purpleStyle = window.purpleStyle
Vue.prototype.$darkStyle = window.darkStyle


Vue.config.productionTip = false
Vue.component('VueECharts', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
