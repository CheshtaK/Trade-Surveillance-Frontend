import { GraphService } from './../../graph.service';
import { TradeService } from './../../services/trade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private graphService: GraphService) { }
  ngOnInit(): void {
  }

  disableGetTradeList(){
    this.graphService.setNewTradeList(false);
  }

}
