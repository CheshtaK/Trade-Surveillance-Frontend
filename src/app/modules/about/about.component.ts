import { GraphService } from './../../services/graph.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private graphService: GraphService) { }
  ngOnInit(): void {
  }

  // disable new trade list generation
  disableGetTradeList(){
    this.graphService.setNewTradeList(false);
  }

}
