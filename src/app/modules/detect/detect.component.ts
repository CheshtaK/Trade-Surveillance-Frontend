import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {

  scenarios: any[];
  constructor() { 
    this.scenarios = [];
    this.scenarios.push({id: '1'});
    this.scenarios.push({id: '2'});
    this.scenarios.push({id: '3'});
  }

  ngOnInit(): void {
  }

}
