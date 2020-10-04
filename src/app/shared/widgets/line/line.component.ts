import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Trade } from '../../../models/Trade';

@Component({
  selector: 'app-widget-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

export class LineComponent implements OnInit {

  // chart options to define various chart parameters
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() {}

  // get table from the dashboard page
  private _dataSource = new BehaviorSubject<Trade[]>([]);

  // trade list to display
  trades: Trade[] = [];

  // set data source variable
  @Input() set dataSource(value: Trade[]) {
    this._dataSource.next(value);
  }

  // getter for data source
  get dataSource() {
    return this._dataSource.getValue();
  }

  // store input values for y axis
  facebook_prices: number[] = [];
  apple_prices: number[] = [];
  walmart_prices: number[] = [];

  // store max and min values of all the y values
  max_values: number[] = [];
  min_values: number[] = [];

  // final max and min to set the y axis range
  max_value: number = 0;
  min_value: number = 0;

  ngOnInit(): void {
    this._dataSource.subscribe(x => {
      this.trades = x;
      this.getArrays(this.trades);
    });

    // call to chart generator function
    this.getChartOptions(this.max_value, this.min_value);

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  // function to store the y axis values
  getArrays(trades: Trade[]): void {
    this.facebook_prices = [];
    this.apple_prices = [];
    this.walmart_prices = [];

    for (let i = 0; i < trades.length; i++) {
      if (
        trades[i]['securityName'] === 'Facebook' &&
        trades[i]['securityType'] === 'ES'
      ) {
        this.facebook_prices.push(trades[i]['price']);
      } else if (
        trades[i]['securityName'] === 'Apple' &&
        trades[i]['securityType'] === 'ES'
      ) {
        this.apple_prices.push(trades[i]['price']);
      } else if (
        trades[i]['securityName'] === 'Walmart' &&
        trades[i]['securityType'] === 'ES'
      ) {
        this.walmart_prices.push(trades[i]['price']);
      } else if (
        trades[i]['securityName'] === 'Facebook' &&
        trades[i]['securityType'] === 'Futures'
      ) {
        this.facebook_prices.push(trades[i]['price']);
      } else if (
        trades[i]['securityName'] === 'Apple' &&
        trades[i]['securityType'] === 'Futures'
      ) {
        this.apple_prices.push(trades[i]['price']);
      } else if (
        trades[i]['securityName'] === 'Walmart' &&
        trades[i]['securityType'] === 'Futures'
      ) {
        this.walmart_prices.push(trades[i]['price']);
      }
    }

    // calculate max and min for y axis range
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

  // function to define chart parameters
  getChartOptions(maximum, minimum): void {
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
        },
        title: { text: 'Security', style: { color: 'gray' } }
      },

      yAxis: {
        title: {
          text: 'Stock Price (in USD)',
          style: {
            color: '#FFFFFF'
          }
        },
        min: minimum + 1,
        max: maximum + 1,
        tickInterval: 0.1
      },
      credits: {
        enabled: false
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
        }
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
