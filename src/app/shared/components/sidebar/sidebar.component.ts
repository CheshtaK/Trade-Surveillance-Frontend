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

  detectFrontRunning(): void {
    // this.tradeService.getDetectedTrades().subscribe(
    //   (response) => {
    //     console.log('front running trades');
    //     this.dataSource = response;
    //     console.log(this.dataSource);
    //   },
    //   (error) => console.log(error)
    // )
  }

  // toggleGraph(){
  //   console.log('toggle graph');
  //   this.graph.changeGraph(this.line);
  // }

  showHistogram(): void {
    this.graph.changeGraph(false, true);
  }

  showLineChart(): void {
    this.graph.changeGraph(true, false);
  }

  showAboutPage(): void {
    console.log('show about Page');
  }

  // this function adds data to db and also fetches the complete list from backend

  addTrade(trade: Trade): any {
    this.tradeService.addTrade(trade).subscribe(
      response => {
        this.tradeService.fetchTrades().subscribe(
          res => {
            console.log('fetch response', res);
            this.graph.setNewTrade(true);
          },
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
  }
}
