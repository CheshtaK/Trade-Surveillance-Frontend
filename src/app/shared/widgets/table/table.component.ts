import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  // get the list of columns to be displayed
  @Input()
  displayedColumns: string[];

  // get the data for table
  @Input()
  dataSource: any;
}
