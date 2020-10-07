import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'

const service = axios.create({
  timeout: 60000
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === -1 && res.message === '未登录') { // 登录超时
      Toast('请登录')
      store.dispatch('loginOut')
      location.reload()
      return
    }

    if (res.code === 0) {
      return Promise.resolve(res)
    } else {
      if (res.resultMsg) {
        Toast(res.resultMsg)
      }
      return Promise.resolve(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
