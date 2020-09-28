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
  panelOpenState = false;

  line: boolean;

  constructor(
    private graph: GraphService,
    private tradeService: TradeService
  ) {}

  ngOnInit(): void {
    this.graph.currentLine.subscribe(line => (this.line = line));
  }

  detectFrontRunning(): void {
    console.log('Call detect front running');
  }

  // toggleGraph(){
  //   console.log('toggle graph');
  //   this.graph.changeGraph(this.line);
  // }

  showHistogram(): void {
    console.log('show histogram panel');
    this.graph.changeGraph(false, true);
  }

  showLineChart(): void {
    console.log('show linechart panel');
    this.graph.changeGraph(true, false);
  }

  showAboutPage(): void {
    console.log('show about Page');
  }

  addTrade(trade: Trade) {
    this.tradeService.addTrade(trade);
  }
}
