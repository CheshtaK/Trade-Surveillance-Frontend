import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  displayedColumns: string[];
  dataSource;

  constructor() {
    this.displayedColumns = ['trade_id', 'trade_dt', 'trade_type', 'trader', 'security', 'security_type', 
                                  'quantity', 'price'];
    this.dataSource = ELEMENT_DATA;
  }

  ngOnInit(): void {
  }

  @ViewChild('TABLE') table: ElementRef;

  exportAsExcel(){
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'front_running.xlsx');
  }

  exportAsPDF(){
    var prepare=[];
    this.dataSource.forEach(e => {
      var tempObj =[];
      
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
        head: [['Trade ID', 'Trade Date Time', 'Trade Type', 'Trader', 'Security', 'Security Type', 
                      'Quantity', 'Price']],
        body: prepare
    });
    doc.save('front_running' + '.pdf');
  }
}

export interface PeriodicElement {
  trade_id: number;
  trade_dt: string;
  trade_type: string;
  trader: string;
  security: string;
  security_type: string;
  quantity: number;
  price: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
  {trade_id: 1, trade_dt: '10-23-04', trade_type: 'sell', trader: 'Citi', security: 'Facebook', security_type: 'Equity Shares', quantity: 1000, price: 8222},
];
