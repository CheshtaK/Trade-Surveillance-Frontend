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
  @Input()
  dataSource: any;
  chartOptions: {};
  Highcharts = Highcharts;
  constructor(private tradeService: TradeService) {}
  trades: Trade[];

  ngOnInit(): void {
    const data = this.tradesDone(this.dataSource);
    console.log(data);

    // call to char generator function
    this.chartOptions = this.generateGraph(data);
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  // function to get required data params for charts
  tradesDone(tradesList): any {
    let dataObj = [];
    tradesList.forEach(trade => dataObj.push(this.dataFormatter(trade)));
    console.log(dataObj);

    const traderName = [...new Set(dataObj.map(item => item.traderName))];
    let data = [];
    traderName.forEach(name => {
      let val = [];
      dataObj.forEach(item => {
        if (item.traderName === name) {
          val.push(item.amount);
        }
      });
      data.push({
        name,
        data: val
      });
    });

    return data;
  }

  // function to format data object needed for chart

  dataFormatter(trade): any {
    const newTrade = {
      traderName: trade.traderName,
      amount: Number((trade.price * trade.quantity).toFixed(2)),
      securityType: trade.securityType
    };

    return newTrade;
  }

  // function to generate chart from data object
  generateGraph(data): any {
    const graphObj = {
      chart: {
        backgroundColor: null,
        borderWidth: 0,
        type: 'column'
      },

      title: {
        text: 'Trade Amount',
        style: {
          color: '#FFFFFF'
        }
      },

      subtitle: {
        text: 'Total Trades done',
        style: {
          color: '#FFFFFF'
        }
      },
      yAxis: {
        title: {
          text: 'Transaction Price [Quantity X Amount in USD]',
          style: {
            color: '#FFFFFF'
          }
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle: {
          color: '#FFFFFF'
        },
        itemHoverStyle: {
          color: 'grey'
        }
      },

      exporting: {
        enabled: true
      },
      colors: [
        '#058DC7',
        '#50B432',
        '#ED561B',
        '#DDDF00',
        '#24CBE5',
        '#64E572',
        '#FF9655',
        '#FFF263',
        '#6AF9C4'
      ],
      series: data,

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
    return graphObj;
  }
}
