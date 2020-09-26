import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  detectWashTrades(): void {
    console.log('Call detect washtrades');
  }
  showHistogram(): void {
    console.log('show histogram panel');
  }
  showLineChart(): void {
    console.log('show linechart panel');
  }
  showAboutPage(): void {
    console.log('show about Page');
  }
}
