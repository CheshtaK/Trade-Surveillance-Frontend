import { TradeService } from '../../services/trade.service';
import { GraphService } from './../../graph.service';
import { Component, OnInit } from '@angular/core';

import { Trade } from '../../models/Trade';

import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dataSource: Trade[] = [];
  displayedColumns: string[] = [
    'trade_id',
    'timestamp',
    'type',
    'traderName',
    'securityName',
    'securityType',
    'quantity',
    'price',
    'brokerName'
  ];

  index: string[] = [
    'timestamp',
    'type',
    'traderName',
    'securityName',
    'securityType',
    'quantity',
    'price',
    'brokerName'
  ];

  line: boolean;
  histogram: boolean;

  constructor(
    private graph: GraphService,
    private tradeService: TradeService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    // code to be replaced once api is done
    // this.tradeService.getTrades().subscribe((trades) => {
    // this.dataSource = trades;

    this.tradeService.getTrades().subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) => console.log(error)
    )

    this.graph.currentLine.subscribe(line => (this.line = line));
    this.graph.currentHistogram.subscribe(
      histogram => (this.histogram = histogram)
    );
  }

  refreshTable(): void {
    this.tradeService.getTrades().subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) => console.log(error)
    )
  }
}
