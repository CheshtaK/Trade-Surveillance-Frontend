import { Trade } from './../../models/Trade';
import { TradeService } from './../../services/trade.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detectwash',
  templateUrl: './detectwash.component.html',
  styleUrls: ['./detectwash.component.css']
})
export class DetectwashComponent implements OnInit {
  
  // to store detected scenarios
  scenarios: Trade[][] = [];

  // data for table
  dataSource: any = [];

  // columns to be displayed in table
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
  
  constructor(
    private tradeService: TradeService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    
    //loading starts
    this.spinner.show();
    this.tradeService.getDetectedWashTrades().subscribe(
      response => {
        this.dataSource = response;
    
        // loading stops
        this.spinner.hide();
        length = this.dataSource.length;
        for (let i = 0; i < length; i++) {
          this.scenarios.push(this.dataSource[i]['involvedTrades']);
        }

      },
      error => {
        console.log(error);
        this.spinner.hide(); //if error occured loading stops
      }
    );
  }
}
