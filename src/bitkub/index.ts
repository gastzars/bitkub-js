/*
 * Bitkub client class
 */

import API from './../api'

export default class Bitkub {
  private _api_client: API

  /**
   * Client class for Bitkub API
   * @param {object} options - An options for Bitkub API authentication
   * @param {string} options.api_key - An api key generated from Bitkub
   * @param {string} options.api_secret - A api secret generated from Bitkub
   * @param {string} options.server_url - Bitkub API server url
   */
  constructor(options: { api_key: string; api_secret: string; server_url: string }) {
    this._api_client = new API(options)
  }

  /**
   * Get server time
   * @return {Promise<integer>} - A unix timestamp
   */
  async server_time(): Promise<any> {
    return this._api_client.server_time()
  }

  async market_my_open_orders(parameters: object): Promise<any> {
    return this._api_client.market_my_open_orders(parameters)
  }
}
