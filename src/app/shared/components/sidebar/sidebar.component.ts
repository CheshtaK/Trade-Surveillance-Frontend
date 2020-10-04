import { GraphService } from './../../../services/graph.service';
import { TradeService } from '../../../services/trade.service';
import { Component, OnInit } from '@angular/core';
import { Trade } from '../../../models/Trade';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  // if current chart is line
  line: boolean;

  // data for table
  dataSource: any = [];

  constructor(
    private graph: GraphService,
    private tradeService: TradeService
  ) {}

  ngOnInit(): void {
    // default chart is line
    this.graph.currentLine.subscribe(line => (this.line = line));
  }

  // displays histogram
  showHistogram(): void {
    this.graph.changeGraph(false, true);
  }

  // displays the line chart
  showLineChart(): void {
    this.graph.changeGraph(true, false);
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
