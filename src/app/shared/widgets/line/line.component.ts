import { Component, OnInit } from '@angular/core';
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
  trades: Trade[];
  constructor(private tradeService: TradeService) {}

  ngOnInit(): void {
    //this.trades = this.tradeService.getTrades();
    console.log('All trades from Linecharts', this.trades);

    this.chartOptions = {
      chart: {
        backgroundColor: null,
        borderWidth: 0
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
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        },
        {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        },
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
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
