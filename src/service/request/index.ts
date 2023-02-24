import axios from 'axios'
import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
class Request {
  instance: AxiosInstance
  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create(config)
  }
}

export default Request
