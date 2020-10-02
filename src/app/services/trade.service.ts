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

  // function to get all trades from database

  getTrades(): any {
    console.log('in get trades service');
    return this.http.get<Trade[]>(this.tradesUrl);
  }

  // function to add new trade to data base as per user input

  addTrade(trade: Trade): any {
    return this.http.post<Trade>(`${this.URL}/insertTrade`, trade, httpOptions);
  }

  // function to fetch existing trades

  fetchTrades(): any {
    console.log('fetch trades working');

    return this.http.get<Trade>(`${this.URL}/fetchTradeList`);
  }

  // function which returns all the detetcted Front Running trades
  getDetectedTrades(): any {
    return this.http.get(this.detectedTradesUrl);
  }
  // function which returns all the detetcted wash trades
  getDetectedWashTrades(): any {
    console.log('detect wash trades');
    return this.http.get(`${this.URL}/getWashTrades`);
  }

  sendEmail(): any {
    console.log('sent');
    return this.http.get(`${this.URL}/sendEmail`);
  }
}
