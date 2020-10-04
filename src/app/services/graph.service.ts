import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  
  // variables to toggle between line and histogram graphs
  private line = new BehaviorSubject<boolean>(true);
  private histogram = new BehaviorSubject<boolean>(false);

  // global variable which detects if the new trade is added or not
  private newTrade = false;
  
  // global variable to detect if new trade list should be generated or not
  private newTradeList = true;

  currentLine = this.line.asObservable();
  currentHistogram = this.histogram.asObservable();

  constructor() {}

  // toggle graph function
  changeGraph(line: boolean, histogram: boolean): any {
    this.line.next(line);
    this.histogram.next(histogram);
  }

  // setter for newTrade
  setNewTrade(val): any {
    this.newTrade = val;
  }

  // getter for newTrade
  getNewTrade(): any {
    return this.newTrade;
  }

  // setter for newTradeList
  setNewTradeList(val): any {
    this.newTradeList = val;
  }

  // getter for newTradeList
  getNewTradeList(): any {
    return this.newTradeList;
  }
}
