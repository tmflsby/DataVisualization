import axios from 'axios'

const service = axios.create({
  baseURL: 'https://book.youbaobao.xyz:18082',
  timeout: 5000
})

// service.interceptors.request.use(config => {
//   config.params = {}
//   config.params.icode = '13926EAFCAA16CC3'
//   return config
// })

service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      console.log(response.data)
      return response.data
    } else {
      return Promise.reject(new Error('请求失败'))
    }
  },
  error => Promise.reject(error)
)

export default service
