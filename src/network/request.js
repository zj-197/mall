import axios from 'axios'
export function request(config) {
  const instanence1 = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/vip',
    timeout: 5000
  })
  // instanence1.interceptors.response.use(config =>{
  //     return config.data
  // })
  return instanence1(config)
}
