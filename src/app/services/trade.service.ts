import { Injectable } from '@angular/core';
import { Trade } from '../models/Trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  constructor() {}
  trades: Trade[];
  detectedTrades: Trade[];

  // tradesUrl = '';
  // detectedTradesUrl = '';

  getTrades(): Trade[] {
    // replace this with fetch request from services
    // return this.http.get<Trade[]>(tradesUrl);

    this.trades = ELEMENT_DATA;
    return this.trades;
  }

  addTrade(trade: Trade): void {
    // replace the post call when api is done
    // return this.http.post<Trade>(this.tradesUrl, todo, httpOptions);

    console.log('from services', trade);
    this.trades.push(trade);
  }

  getDetectedTrades(): Trade[] {
    // replace this with fetch request from services
    // return this.http.get<Trade[]>(detectedTradesUrl);

    this.detectedTrades = DetectedElements;
    return this.detectedTrades;
  }
}

// remove this once we start fetching data from server
const ELEMENT_DATA: Trade[] = [
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  }
];

const DetectedElements: Trade[] = [
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  },
  {
    trade_id: 1,
    trade_dt: '10-23-04',
    trade_type: 'sell',
    trader: 'Citi',
    security: 'Facebook',
    security_type: 'Equity Shares',
    quantity: 1000,
    price: 8222,
    broker: 'Citi Velocity'
  }
];
