import axios, { AxiosResponse } from 'axios'
import type {
  AxiosInstance,
  CreateAxiosDefaults,
  AxiosRequestConfig,
} from 'axios'

interface RequestInterceptor {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface configInterceptor extends CreateAxiosDefaults {
  interceptors?: RequestInterceptor
}

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptor
  constructor(config?: configInterceptor) {
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (err) => {
        return err
      }
    )
  }

  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default Request
