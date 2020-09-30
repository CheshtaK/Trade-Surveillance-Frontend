import { Trade } from './../../models/Trade';
import { TradeService } from './../../services/trade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {

  scenarios: Trade[][] = [];
  
  dataSource: any = [];
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
  constructor(private tradeService: TradeService) {
  }

  ngOnInit(): void {
    this.tradeService.getDetectedTrades().subscribe(
      (response) => {
        this.dataSource = response;
        console.log(this.dataSource.length);
        // console.log(this.dataSource[0]['involvedTrades'][0]);        

        length = this.dataSource.length;
        for(let i=0; i<length; i++){
          this.scenarios.push(this.dataSource[i]['involvedTrades']);
        }

        console.log(this.scenarios);
      },
      (error) => console.log(error)
    )
  }
}
