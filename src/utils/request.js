import axios from 'axios'
// import { Message } from 'element-ui'
import { Notify } from 'vant'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
import router from '@/router'

console.log(process.env.VUE_APP_BASE_API, 'process.env.VUE_APP_BASE_API')

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (store.getters.token) {
    //   config.headers['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    // if (res.status !== 200) {
    //   Notify({
    //     message: res.errorMessage || res.message || 'Error',
    //     type: 'danger',
    //     duration: 1 * 1000
    //   })
    //   return Promise.reject()
    // } else {
    //   return res
    // }
    return res
  },
  error => {
    if (error.response.status === 401) {
      // 清除登录信息，跳转至登录页面
      Notify({
        message: '登录失效，请重新登录!',
        type: 'danger',
        duration: 5 * 1000
      })
      router.replace(`/login`)
      location.reload()
      return
    }
    return Promise.reject(error)
  }
)

export default service
