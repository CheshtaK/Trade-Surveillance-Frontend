import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trade } from '../models/Trade';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  
  constructor(private http: HttpClient) {}
  trades: Trade[];
  detectedTrades: Trade[];

  tradesUrl = 'http://localhost:8080/getTradeList';
  detectedTradesUrl = 'http://localhost:8080/getFrontRunningTrades';

  getTrades() {
    // replace this with fetch request from services
    // return this.http.get<Trade[]>(tradesUrl);

    // this.trades = ELEMENT_DATA;
    return this.http.get<Trade[]>(this.tradesUrl);
  }

  addTrade(trade: Trade): void {
    // replace the post call when api is done
    // return this.http.post<Trade>(this.tradesUrl, todo, httpOptions);

    this.trades.push(trade);
  }

  getDetectedTrades(){
    // replace this with fetch request from services
    // return this.http.get<Trade[]>(detectedTradesUrl);

    // this.detectedTrades = DetectedElements;
    // return this.detectedTrades;
    return this.http.get(this.detectedTradesUrl);
  }
}