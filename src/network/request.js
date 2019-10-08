import axios from 'axios'
export function request(config) {
  const instanence1 = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000
  })
  return instanence1(config)
}
