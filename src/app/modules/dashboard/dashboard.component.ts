import { GraphService } from './../../graph.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['trade_id', 'trade_dt', 'trade_type', 'trader', 'security', 'security_type', 
                                  'quantity', 'price'];
  dataSource = ELEMENT_DATA;
  
  line: boolean;

  constructor(private graph: GraphService) {}

  ngOnInit(): void {
    this.graph.currentLine.subscribe(line => this.line = line);
  }

}

export interface PeriodicElement {
  trade_id: number;
  trade_dt: string;
  trade_type: string;
  trader: string;
  security: string;
  security_type: string;
  quantity: number;
  price: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
];

