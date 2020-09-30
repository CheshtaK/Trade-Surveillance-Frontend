import { Injectable } from '@angular/core';
import { Trade } from '../models/Trade';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  constructor(private http: HttpClient) {}
  trades: Trade[];
  detectedTrades: Trade[];

  URL = 'http://localhost:8080';
  tradesUrl = 'http://localhost:8080/getTradeList';
  // detectedTradesUrl = '';

  getTrades(): any {
    // replace this with fetch request from services
    // return this.http.get<Trade[]>(tradesUrl);

    // this.trades = ELEMENT_DATA;
    console.log('in get trades service');
    return this.http.get<Trade[]>(this.tradesUrl);
  }

  addTrade(trade: Trade): any {
    // replace the post call when api is done
    // return this.http.post<Trade>(this.tradesUrl, todo, httpOptions);
    console.log(trade);
    return this.http.post<Trade>(`${this.URL}/insertTrade`, trade, httpOptions);
    // this.trades.push(trade);
  }

  // function to fetch existing trades

  fetchTrades(): any {
    console.log('fetch trades working');

    return this.http.get<Trade>(`${this.URL}/fetchTradeList`);
  }
  // getDetectedTrades(): Trade[] {
  //   // replace this with fetch request from services
  //   // return this.http.get<Trade[]>(detectedTradesUrl);

  //   // this.detectedTrades = DetectedElements;
  //   // return this.detectedTrades;
  // }
}

// "type": "buy",
// "timestamp": "2020-10-05T03:30:06.000+00:00",
// "securityName": "Walmart",
// "securityType": "Put",
// "brokerName": "Sharekhan",
// "traderName": "Raytheon Technologies",
// "quantity": 67,
// "price": 4074.6

// brokerName: "One"
// quantity: 2
// security: "Facebook"
// securityType: "Equity shares"
// time: "12:10:00"
// totalPrice: 44
// type: "Buy"
