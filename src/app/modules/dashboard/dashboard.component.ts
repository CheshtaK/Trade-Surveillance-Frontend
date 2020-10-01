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
  isNewTrade = false;
  constructor(
    private graph: GraphService,
    private tradeService: TradeService,
    private logger: NGXLogger,
    private spinner: NgxSpinnerService
  ) {}

  ngDoCheck() {
    // check if new trade is added or not
    if (this.isNewTrade !== this.graph.getNewTrade()) {
      this.fetchData();
    }
  }
  ngOnInit(): void {
    this.getAllData();
  }

  // refresh table data on button click
  refreshTable(): void {
    this.getAllData();
  }

  // function to get all data from backend and pass it to ui
  getAllData(): void {
    // laoding starts
    this.spinner.show();
    this.tradeService.getTrades().subscribe(
      response => {
        // loading stops
        this.spinner.hide();
        this.dataSource = response;
      },
      error => {
        console.log(error);
        this.spinner.hide(); //if error occured loading stops
      }
    );

    this.graph.currentLine.subscribe(line => (this.line = line));
    this.graph.currentHistogram.subscribe(
      histogram => (this.histogram = histogram)
    );
  }

  // function to fetch data from db when new trade is added
  fetchData(): any {
    this.spinner.show();
    this.tradeService.fetchTrades().subscribe(
      response => {
        this.spinner.hide();
        this.dataSource = response;
        console.log('fetch', this.dataSource);
        this.graph.setNewTrade(false);
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
