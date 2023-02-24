import Request from './request'

const request = new Request({
  baseURL: process.env.VUE_APP_BASE_URL,
})

export default request
