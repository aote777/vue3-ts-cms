import Request from './request'

const request = new Request({
  baseURL: process.env.VUE_APP_BASE_URL,
  interceptors: {
    requestInterceptor(config) {
      return config
    },
    requestInterceptorCatch(err) {
      return err
    },
    responseInterceptor(config) {
      return config
    },
    responseInterceptorCatch(err) {
      return err
    },
  },
})

export default request
