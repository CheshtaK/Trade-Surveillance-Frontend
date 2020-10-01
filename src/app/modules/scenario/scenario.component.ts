import { TradeService } from '../../services/trade.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Trade } from '../../models/Trade';

import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  displayedColumns: string[];

  @Input() scenario: Trade[];

  constructor(private tradeService: TradeService,
    private datePipe:  DatePipe) {}

  ngOnInit(): void {
    // code to be replaced once api is done
    // this.tradeService.detectedTrades().subscribe((trades) => {
    // this.dataSource = trades;

    // this.detectedTrades = this.tradeService.getDetectedTrades();

    this.displayedColumns = [
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
  }

  @ViewChild('TABLE') table: ElementRef;

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'front_running.xlsx');
  }

  exportAsPDF() {
    var prepare = [];

    for(let i=0; i<this.scenario.length; i++){
      var tempObj = [];
      
      let time = this.datePipe.transform(this.scenario[i].timestamp, 'mediumTime', 'UTC');

      tempObj.push(i+1);
      tempObj.push(time);
      tempObj.push(this.scenario[i].type);
      tempObj.push(this.scenario[i].traderName);
      tempObj.push(this.scenario[i].securityName);
      tempObj.push(this.scenario[i].securityType);
      tempObj.push(this.scenario[i].quantity);
      tempObj.push(this.scenario[i].price);
      tempObj.push(this.scenario[i].brokerName);

      prepare.push(tempObj);
    }

    const doc = new jsPDF();

    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    // doc.addImage('../../../assets/img/watermark.png', 'PNG',0,0,100,100);

    autoTable(doc, {
      head: [
        [
          'Trade ID',
          'Trade Date Time',
          'Trade Type',
          'Trader',
          'Security',
          'Security Type',
          'Quantity',
          'Price',
          'Broker'
        ]
      ],
      body: prepare,
      didDrawPage: function (data){
        doc.addImage('../../../assets/img/citi_logo.png', 'PNG', width - 31, 17, 17, 10);
        doc.text('INTERNAL REPORT', width/2 - 25, 40);

        doc.setFontSize(11);
        doc.text(
          'This document is confidential and for internal purposes only. Distribution is strictly prohibited.',
                18, doc.internal.pageSize.height - 20);
      },
      margin: {top: 50}
    });
    doc.save('front_running' + '.pdf');
  }
}
