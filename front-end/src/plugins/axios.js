// 'use strict'
//
// import Vue from 'vue'
// import axios from 'axios'
//
// // Full config:  https://github.com/axios/axios#request-config
// // axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//
// const config = {
//   // baseURL: process.env.baseURL || process.env.apiUrl || ""
//   // timeout: 60 * 1000, // Timeout
//   // withCredentials: true, // Check cross-site Access-Control
// }
//
// const _axios = axios.create(config)
//
// _axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )
//
// // Add a response interceptor
// _axios.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response
//   },
//   function (error) {
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )
//
// Plugin.install = function (Vue, options) {
//   Vue.axios = _axios
//   window.axios = _axios
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get () {
//         return _axios
//       }
//     },
//     $axios: {
//       get () {
//         return _axios
//       }
//     }
//   })
// }
//
// Vue.use(Plugin)
//
// export default Plugin
//
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueProgressBar from 'vue-progressbar'
import router from '../router'
const options = {
  color: '#00cc00',
  failedColor: '#ff3300',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueAxios, axios)
Vue.use(VueProgressBar, options)
Vue.axios.defaults.baseURL = `${process.env.VUE_APP_STG}/`
Vue.router = router

axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})
