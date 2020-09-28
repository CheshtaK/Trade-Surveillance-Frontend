import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  detectFrontRunning(): void {
    console.log('Call detect front running');
  }
  showHistogram(): void {
    console.log('show histogram panel');
    this.router.navigate(['dashboard/histogram']);
  }
  showLineChart(): void {
    console.log('show linechart panel');
    this.router.navigate(['dashboard/line']);
  }
  showAboutPage(): void {
    console.log('show about Page');
  }
}
