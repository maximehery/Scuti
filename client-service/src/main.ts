import Vue from 'vue'
import ScutiUI from './ui/ScutiUI'

Vue.config.productionTip = false

new Vue({
  render: h => h(ScutiUI)
}).$mount('#app')
