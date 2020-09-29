import { TradeService } from '../../services/trade.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Trade } from '../../models/Trade';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  displayedColumns: string[];
  detectedTrades: Trade[];

  constructor(private tradeService: TradeService) {}

  ngOnInit(): void {
    // code to be replaced once api is done
    // this.tradeService.detectedTrades().subscribe((trades) => {
    // this.dataSource = trades;

    this.detectedTrades = this.tradeService.getDetectedTrades();
    console.log('detected trades', this.detectedTrades);

    this.displayedColumns = [
      'trade_id',
      'trade_dt',
      'trade_type',
      'trader',
      'security',
      'security_type',
      'quantity',
      'price',
      'broker'
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
    this.detectedTrades.forEach(e => {
      var tempObj = [];

      tempObj.push(e.trade_id);
      tempObj.push(e.trade_dt);
      tempObj.push(e.trade_type);
      tempObj.push(e.trader);
      tempObj.push(e.security);
      tempObj.push(e.security_type);
      tempObj.push(e.quantity);
      tempObj.push(e.price);

      prepare.push(tempObj);
    });

    const doc = new jsPDF();

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
          'Price'
        ]
      ],
      body: prepare
    });
    doc.save('front_running' + '.pdf');
  }
}
