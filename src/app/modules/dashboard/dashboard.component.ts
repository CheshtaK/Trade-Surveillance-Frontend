import { TradeService } from '../../services/trade.service';
import { GraphService } from './../../graph.service';
import { Component, OnInit } from '@angular/core';

import { Trade } from '../../models/Trade';

import { NGXLogger } from 'ngx-logger';
import { LoaderComponent } from '../../shared/widgets/loader/loader.component';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private logger: NGXLogger,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllData();
  }

  refreshTable(): void {
    this.getAllData();
  }

  // function to get all data from backend and pass it to ui
  getAllData(): void {
    this.spinner.show();
    this.tradeService.getTrades().subscribe(
      response => {
        // loading stops
        this.spinner.hide();
        this.dataSource = response;
      },
      error => {
        console.log(error);
        this.spinner.hide();
      }
    );

    this.graph.currentLine.subscribe(line => (this.line = line));
    this.graph.currentHistogram.subscribe(
      histogram => (this.histogram = histogram)
    );
  }
}
