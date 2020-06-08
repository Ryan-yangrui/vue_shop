import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import Axios from 'axios'
// 导入字体图标
import './assets/fonts/iconfont.css'

// 配置请求的根路径
Axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 配置上传输参数格式
Vue.prototype.$http = Axios
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.transformRequest = [function (data) {
  let src = ''
  for (const item in data) {
    src += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
  }
  return src
}]

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
