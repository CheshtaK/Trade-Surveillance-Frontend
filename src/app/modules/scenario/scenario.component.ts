import { GraphService } from './../../services/graph.service';
import { TradeService } from '../../services/trade.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Trade } from '../../models/Trade';

import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {
  
  // columns to be displayed in table
  displayedColumns: string[];

  // get the scenario from detect page
  @Input() scenario: Trade[];

  constructor(private graphService: GraphService,
    private datePipe:  DatePipe,
    private tradeService: TradeService,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {

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

  // disable generating a new trade list
  disableGetTradeList(){
    this.graphService.setNewTradeList(false);
  }

  @ViewChild('TABLE') table: ElementRef;

  // send email function
  sendMail() {

    // display a snackbar for email sent confirmation
    this.snackBar.open('Email sent!', 'Done', {
      duration: 3000
    })

    // call the send mail service
    this.tradeService.sendEmail().subscribe(
      response => {
        console.log('email sent', response);
      },
      err => console.log(err)
    );
  }

  // export as excel function
  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'front_running.xlsx');
  }

  // export as pdf function
  exportAsPDF() {
    var prepare = [];

    for(let i=0; i<this.scenario.length; i++){
      var tempObj = [];
      
      // format the timestamp to display only time
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

    // define the pdf format
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
    
    // save pdf
    doc.save('front_running' + '.pdf');
  }
}
