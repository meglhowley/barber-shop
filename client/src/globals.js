import axios from 'axios'
export const BASE_URL = 'http://localhost:3001'

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)