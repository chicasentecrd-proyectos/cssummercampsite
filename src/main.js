// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App'
import './index.css'
// import router from './router'


// createApp(App).use(router).mount('#app')


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
