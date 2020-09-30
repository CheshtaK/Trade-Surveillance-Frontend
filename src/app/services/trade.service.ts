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
  detectedTradesUrl = 'http://localhost:8080/getFrontRunningTrades';

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

  getDetectedTrades() {
    // replace this with fetch request from services
    // return this.http.get<Trade[]>(detectedTradesUrl);

    // this.detectedTrades = DetectedElements;
    // return this.detectedTrades;
    return this.http.get(this.detectedTradesUrl);
  }
}
