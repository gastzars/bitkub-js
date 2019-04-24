import axios from 'axios'
import api_data from './data'
import crypto from 'crypto'

const DEFAULT_SERVER_URL = 'https://api.bitkub.com/api/'

type endPointData = {
  auth: boolean
  path: string
  parameters: {
    [key: string]: boolean
  }
}

type credentials = {
  api_key: string
  api_secret: string
}

export default class API {
  [key: string]: any
  private _credentials: credentials = {
    api_key: '',
    api_secret: ''
  }
  private _server_url: string = DEFAULT_SERVER_URL

  /**
   * API class for Bitkub API
   * @param {object} options - An options for Bitkub API authentication
   * @param {string} options.api_key - An api key generated from Bitkub
   * @param {string} options.api_secret - A api secret generated from Bitkub
   * @param {string} options.server_url - Bitkub API server url
   */
  constructor(options: { api_key: string; api_secret: string; server_url: string }) {
    this._credentials = {
      api_key: options.api_key,
      api_secret: options.api_secret
    }
    this._server_url = options.server_url || DEFAULT_SERVER_URL
    Object.keys(api_data).forEach(end_point => {
      const end_point_data: endPointData = api_data[end_point]
      if (!!end_point_data.auth === false)
        this[end_point] = this._build_non_secure_endpoint_function(end_point_data)
      if (!!end_point_data.auth === true)
        this[end_point] = this._build_secure_endpoint_function(end_point_data)
    })
  }

  /**
   * Build non-secure API endpoint function
   */
  private _build_non_secure_endpoint_function(data: endPointData) {
    return async (parameters: object): Promise<any> => {
      let builtParameters: any = parameters || {}
      this._build_parameters_validator(data.parameters)(builtParameters)
      let url_params: string = ''
      if (Object.keys(builtParameters).length > 0) {
        let all_params: string[] = []
        Object.keys(builtParameters).forEach(key => {
          all_params.push(key + '=' + builtParameters[key])
        })
        url_params = '?' + all_params.join('&')
      }
      const response = await axios.get(this._server_url + data.path + url_params)
      if (response.status === 200) return response.data
      throw response
    }
  }

  /**
   * Build secure API endpoint function
   */
  private _build_secure_endpoint_function(data: endPointData) {
    return async (parameters: object): Promise<any> => {
      let builtParameters: any = parameters || {}
      this._build_parameters_validator(data.parameters)(builtParameters)
      builtParameters['ts'] = new Date().getTime()
      builtParameters['sig'] = this._generate_signature(builtParameters)
      const response = await axios.post(this._server_url + data.path, builtParameters, {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'x-btk-apikey': this._credentials.api_key
        }
      })
      if (response.status === 200) return response.data
      throw response
    }
  }

  /**
   * Generate HMAC signature from json parameters
   */
  private _generate_signature(json: any): string {
    return crypto
      .createHmac('sha256', this._credentials.api_secret)
      .update(JSON.stringify(json))
      .digest('hex')
  }

  /**
   * Build parameter validator function
   */
  private _build_parameters_validator(parameters: { [key: string]: boolean }) {
    return (params: object): void => {
      let missing_parameters: string[] = []
      const param_keys = Object.keys(params)
      Object.keys(parameters).forEach(key => {
        if (parameters[key] === true && param_keys.indexOf(key) === -1) {
          missing_parameters.push(':' + key)
        }
      })
      if (missing_parameters.length > 0) {
        throw 'Missing parameters (' + missing_parameters.join(', ') + ')'
      }
    }
  }
}
