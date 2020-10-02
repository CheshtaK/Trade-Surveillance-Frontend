import { TradeService } from '../../../services/trade.service';
import { GraphService } from './../../../graph.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trade } from '../../../models/Trade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  line: boolean;
  dataSource: any = [];

  constructor(
    private graph: GraphService,
    private tradeService: TradeService
  ) {}

  ngOnInit(): void {
    this.graph.currentLine.subscribe(line => (this.line = line));
  }

  showHistogram(): void {
    this.graph.changeGraph(false, true);
  }

  showLineChart(): void {
    this.graph.changeGraph(true, false);
  }

  showAboutPage(): void {
    console.log('show about Page');
  }

  // this function adds data to db and changes the global isNewTrade variable to true
  addTrade(trade: Trade): any {
    this.tradeService.addTrade(trade).subscribe(
      response => {
        this.graph.setNewTrade(true);
        console.log('new trade added success', response);
      },
      err => console.log(err)
    );
  }
}
