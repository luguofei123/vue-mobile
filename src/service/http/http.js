// import { Message } from 'element-ui'
// import * as Myutil from '@/util/util.js'
// import store from '@/store'
import axios from 'axios'
// import myheader from './sethearder'
import router from '@/router/router'
// import Qs from 'qs'
// 创建实例
const instance = axios.create({
  timeout: 5000
})
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// instance.defaults.headers.post['Content-Type'] = 'application/json'
// http请求拦截器 主要是对请求参数的设置
instance.interceptors.request.use(
  request => {
    return request
  },
  error => Promise.error(error)
)
// 跳转到登陆页
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}
// 请求失败后的统一处理
// @param {Number} status 请求失败的状态码
const errorHandle = (status, other) => {
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      // console.log(router.currentRoute.fullPath)
      toLogin()
      break
    // 403 token过期 清楚token 跳转登录页
    case 403:
      // store.commit('loginOut')
      // toLogin()
      break
    default:
      console.log(other)
  }
}
// http响应拦截器
instance.interceptors.response.use(response => {
  // 请求成功
  // console.log(response)
  // Message.success({message: response.data.status})
  // return response.data.status === 'success' ? Promise.resolve(response.data) : Promise.reject(response.data)
  // return response.data.status === 200 ? Promise.resolve(response.data) : Promise.reject(response.data)
  // console.log(response.data.status)
  return response.status === 200 ? Promise.resolve(response.data) : Promise.reject(response.data)
},
error => {
  console.log(error)
  // 请求失败
  // Message.error({message: '请求失败'})
  const { response } = error
  if (response) {
    // 请求已发出，但是不在2xx的范围
    errorHandle(response.status, response.data.message)
    return Promise.reject(response)
  } else {
    // 其他情况如断网等
    // console.log(111)
  }
})
export default instance
