import { TradeService } from './../../../services/trade.service';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Trade } from '../../../models/Trade';

@Component({
  selector: 'app-widget-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.css']
})
export class HistogramComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  constructor(private tradeService: TradeService) {}
  trades: Trade[];

  ngOnInit(): void {
    //this.trades = this.tradeService.getTrades();
    this.chartOptions = {
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        type: 'column'
      },

      title: {
        text: 'Random data',
        style: {
          color: '#FFFFFF'
        }
      },

      subtitle: {
        text: 'More random data',
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

      exporting: {
        enabled: true
      },

      series: [
        {
          name: 'Citi Group',
          
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        },
        {
          name: 'Raytheon',
          
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        },
        {
          name: 'LVMH',
          
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        },
        {
          name: 'Alibaba Group',
         
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
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

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
