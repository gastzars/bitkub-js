/*
 * Bitkub client class
 */

import API from './../api'

export default class Bitkub {
  private _api_client: API

  /**
   * Client class for Bitkub API
   * @param {object} options - An options for Bitkub API authentication
   * @param {string} [options.api_key] - An api key generated from Bitkub
   * @param {string} [options.api_secret] - A api secret generated from Bitkub
   * @param {string} [options.server_url] - Bitkub API server url (optional)
   */
  constructor(options: { api_key: string; api_secret: string; server_url?: string }) {
    this._api_client = new API(options)
  }

  /**
   * Get server timestamp
   */
  async server_time(): Promise<any> {
    return this._api_client.server_time()
  }

  /**
   * List all available symbols
   */
  async symbols(): Promise<any> {
    return this._api_client.market_symbols()
  }

  /**
   * Get ticker information
   */
  async ticker(): Promise<any> {
    return this._api_client.market_ticker()
  }

  /**
   * List recent trades
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {integer} [parameters.lmt] - No. of limit to query recent trades
   */
  async trades(parameters: { sym: string; lmt: number }): Promise<any> {
    return this._api_client.market_trades(parameters)
  }

  /**
   * List open buy orders
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {integer} [parameters.lmt] - No. of limit to query recent trades
   */
  async bids(parameters: object): Promise<any> {
    return this._api_client.market_bids(parameters)
  }

  /**
   * List open sell orders
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {integer} [parameters.lmt] - No. of limit to query recent trades
   */
  async asks(parameters: { sym: string; lmt: number }): Promise<any> {
    return this._api_client.market_asks(parameters)
  }

  /**
   * List all open orders
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {integer} [parameters.lmt] - No. of limit to query recent trades
   */
  async books(parameters: { sym: string; lmt: number }): Promise<any> {
    return this._api_client.market_books(parameters)
  }

  /**
   * Get tradingview data for displaying tradingview graph
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {integer} [parameters.int] - Chart interval in minutes
   * @param {integer} [parameters.frm] - Timestamp of the starting time (from)
   * @param {integer} [parameters.to] - Timestamp of the ending time (to)
   */
  async trading_view(parameters: {
    sym: string
    int: number
    frm: number
    to: number
  }): Promise<any> {
    return this._api_client.market_trading_view(parameters)
  }

  /**
   * Get user wallet info
   */
  async wallet(): Promise<any> {
    return this._api_client.market_wallet()
  }

  /**
   * Get balances info: this includes both available and reserved balances
   */
  async balances(): Promise<any> {
    return this._api_client.market_balances()
  }

  /**
   * Create a buy order
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {number} [parameters.amt] - Amount you want to spend with no trailing zero (e.g 1000.00 is invalid, 1000 is ok)
   * @param {number} [parameters.rat] - Rate you want for the order with no trailing zero (e.g 1000.00 is invalid, 1000 is ok)
   * @param {string} [parameters.typ] - Order type: limit or market
   */
  async place_bid(parameters: {
    sym: string
    amt: number
    rat: number
    typ: string
  }): Promise<any> {
    return this._api_client.market_place_bid(parameters)
  }

  /**
   * Create a sell order
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym - A symbol name
   * @param {number} [parameters.amt] - Amount you want to spend with no trailing zero (e.g 1000.00 is invalid, 1000 is ok)
   * @param {number} [parameters.rat] - Rate you want for the order with no trailing zero (e.g 1000.00 is invalid, 1000 is ok)
   * @param {string} [parameters.typ] - Order type: limit or market
   */
  async place_ask(parameters: {
    sym: string
    amt: number
    rat: number
    typ: string
  }): Promise<any> {
    return this._api_client.market_place_ask(parameters)
  }

  /**
   * Cancel an open order
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {integer} [parameters.id] - Order id you wish to cancel
   * @param {string} [parameters.sd] - Order side: buy or sell
   */
  async cancel_order(parameters: { sym: string; id: number; sd: string }): Promise<any> {
    return this._api_client.market_cancel_order(parameters)
  }

  /**
   * List all open orders of the given symbol
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   */
  async my_open_orders(parameters: { sym: string }): Promise<any> {
    return this._api_client.market_my_open_orders(parameters)
  }

  /**
   * List all orders that have already matched
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {string} [parameters.p] - Page (optional)
   * @param {string} [parameters.lmt] - Limit (optional)
   */
  async my_order_history(parameters: {
    sym: string
    p?: string
    lmt?: string
  }): Promise<any> {
    return this._api_client.market_my_order_history(parameters)
  }

  /**
   * Get information regarding the specified order
   * @param {object} parameters = A query parameters
   * @param {string} [parameters.sym] - A symbol name
   * @param {integer} [parameters.id] - Order id
   * @param {string} [parameters.sd] - Order side: buy or sell
   */
  async order_info(parameters: { sym: string; id: number; sd: string }): Promise<any> {
    return this._api_client.market_order_info(parameters)
  }
}
