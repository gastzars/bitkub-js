/**
 * Data for API endpoints
 */

type allData = {
  [key: string]: {
    auth: boolean
    path: string
    parameters: {
      [key: string]: boolean
    }
  }
}

const api_data: allData = {
  server_time: {
    auth: false,
    path: 'servertime',
    parameters: {}
  },
  market_symbols: {
    auth: false,
    path: 'market/symbols',
    parameters: {}
  },
  market_ticker: {
    auth: false,
    path: 'market/ticker',
    parameters: {}
  },
  market_trades: {
    auth: false,
    path: 'market/trades',
    parameters: {
      sym: true,
      lmt: true
    }
  },
  market_bids: {
    auth: false,
    path: 'market/bids',
    parameters: {
      sym: true,
      lmt: true
    }
  },
  market_asks: {
    auth: false,
    path: 'market/asks',
    parameters: {
      sym: true,
      lmt: true
    }
  },
  market_books: {
    auth: false,
    path: 'market/books',
    parameters: {
      sym: true,
      lmt: true
    }
  },
  market_trading_view: {
    auth: false,
    path: 'market/tradingview',
    parameters: {
      sym: true,
      int: true,
      from: true,
      to: true
    }
  },
  market_wallet: {
    auth: true,
    path: 'market/wallet',
    parameters: {}
  },
  market_balances: {
    auth: true,
    path: 'market/balances',
    parameters: {}
  },
  market_place_bid: {
    auth: true,
    path: 'market/place-bid',
    parameters: {
      sym: true,
      amt: true,
      rat: true,
      typ: true
    }
  },
  market_place_ask: {
    auth: true,
    path: 'market/place-ask',
    parameters: {
      sym: true,
      amt: true,
      rat: true,
      typ: true
    }
  },
  market_cancel_order: {
    auth: true,
    path: 'market/cancel-order',
    parameters: {
      sym: true,
      id: true,
      sd: true
    }
  },
  market_my_open_orders: {
    auth: true,
    path: 'market/my-open-orders',
    parameters: {
      sym: true
    }
  },
  market_my_order_history: {
    auth: true,
    path: 'market/my-order-history',
    parameters: {
      sym: true,
      p: false,
      lmt: false
    }
  },
  market_order_info: {
    auth: true,
    path: 'market/order-info',
    parameters: {
      sym: true,
      id: true,
      sd: true
    }
  }
}

export default api_data
