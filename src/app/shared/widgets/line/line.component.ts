import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { TradeService } from 'src/app/services/trade.service';
import { Trade } from '../../../models/Trade';

@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() {}

  private _dataSource = new BehaviorSubject<Trade[]>([]);

  trades: Trade[] = [];

  @Input() set dataSource(value: Trade[]){
    this._dataSource.next(value);
  }

  get dataSource(){
    return this._dataSource.getValue();
  }

  facebook_prices: number[] = [];
  apple_prices: number[] = [];
  walmart_prices: number[] = [];

  max_values: number[] = [];
  min_values: number[] = [];

  max_value: number = 0;
  min_value: number = 0

  ngOnInit(): void {

    this._dataSource.subscribe(x => {
      this.trades = x;
      this.getArrays(this.trades);
    })

    this.getChartOptions(this.max_value, this.min_value);

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  getArrays(trades: Trade[]): void {

    this.facebook_prices = [];
    this.apple_prices = [];
    this.walmart_prices = [];

    for(let i=0; i<trades.length; i++){
      if(trades[i]['securityName'] === 'Facebook' && (trades[i]['securityType'] === 'ES')){
        this.facebook_prices.push(trades[i]['price']);
      }

      else if(trades[i]['securityName'] === 'Apple' && (trades[i]['securityType'] === 'ES')){
        this.apple_prices.push(trades[i]['price']);
      }

      else if(trades[i]['securityName'] === 'Walmart' && (trades[i]['securityType'] === 'ES')){
        this.walmart_prices.push(trades[i]['price']);
      }

      else if(trades[i]['securityName'] === 'Facebook' && (trades[i]['securityType'] === 'Futures')){
        this.facebook_prices.push(trades[i]['price']);
      }

      else if(trades[i]['securityName'] === 'Apple' && (trades[i]['securityType'] === 'Futures')){
        this.apple_prices.push(trades[i]['price']);
      }

      else if(trades[i]['securityName'] === 'Walmart' && (trades[i]['securityType'] === 'Futures')){
        this.walmart_prices.push(trades[i]['price']);
      }
    }

    console.log(this.facebook_prices);

    this.max_values.push(Math.max(...this.facebook_prices));
    this.max_values.push(Math.max(...this.apple_prices));
    this.max_values.push(Math.max(...this.walmart_prices));

    this.min_values.push(Math.min(...this.facebook_prices));
    this.min_values.push(Math.min(...this.apple_prices));
    this.min_values.push(Math.min(...this.walmart_prices));

    this.max_value = Math.max(...this.max_values);
    this.min_value = Math.min(...this.min_values);

    this.getChartOptions(this.max_value, this.min_value);
  }

  getChartOptions(maximum, minimum): void{
    this.chartOptions = {
      chart: {
        backgroundColor: null,
        borderWidth: 0
      },

      title: {
        text: 'Market Price Trend',
        style: {
          color: '#FFFFFF'
        }
      },

      subtitle: {
        text: 'Equity Shares & Futures',
        style: {
          color: '#FFFFFF'
        }
      },
      
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle: {
          color: '#FFFFFF'
        }
      },

      yAxis: {
        title: {
          text: 'Stock Price (in USD)',
          style: {
            color: '#FFFFFF'
          }
        },
        min: minimum+1, max: maximum+1,
        tickInterval: 0.1
      },

      exporting: {
        enabled: true
      },

      series: [
        {
          name: 'Facebook',
          data: this.facebook_prices,
        },
        {
          name: 'Apple',
          data: this.apple_prices,
          color: 'pink'
        },
        {
          name: 'Walmart',
          data: this.walmart_prices,
          color: 'lightgreen'
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }
        ]
      }
    };
  }
}
