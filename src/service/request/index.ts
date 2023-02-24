import axios from 'axios'
import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
class Request {
  instance: AxiosInstance
  constructor(config?: CreateAxiosDefaults<any> | undefined) {
    this.instance = axios.create(config)
  }
}
