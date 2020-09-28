import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  displayedColumns: string[];

  @Input()
  dataSource: any;
}