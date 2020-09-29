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
  dataSource: Trade[];
  displayedColumns: string[] = [
    'trade_id',
    'trade_dt',
    'trade_type',
    'trader',
    'security',
    'security_type',
    'quantity',
    'price',
    'broker'
  ];
  // dataSource = ELEMENT_DATA;

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

    this.dataSource = this.tradeService.getTrades();
    this.graph.currentLine.subscribe(line => (this.line = line));
    this.graph.currentHistogram.subscribe(
      histogram => (this.histogram = histogram)
    );
  }

  refreshTable(): void {
    // console.log('refresh table data');
    this.logger.debug('refresh table data');
    this.dataSource = this.tradeService.getTrades();
  }
}
