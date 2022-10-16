import App from './App'
	
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// let tabbar = document.getElementsByClassName('uni-tabbar')
// let indicator = document.createElement('div')
// indicator.className = "indicator"
// tabbar[0].appendChild(indicator)
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif