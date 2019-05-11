import axios from 'axios'
import { Toast } from 'vant'
import 'vant/lib/vant-css/index.css'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const http = axios.create({
  baseURL: ''
})
let loadconut = 0
/* let params = (data) => {
  let body = {
    userId: '123',
    tokenId: 'abc123456789',
    data: JSON.stringify(data)
  }
  return body
}

 const api = ({url, data, method = 'get'}) => {
  return http({
    url: url,
    method: method,
    params: params(data)
  }).then()
} */
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  loadconut++
  Toast.loading({
    mask: true,
    message: '加载中...'
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  loadconut--
  if (loadconut === 0) {
    Toast.clear()
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default http
