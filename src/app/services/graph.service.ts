import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private line = new BehaviorSubject<boolean>(true);
  private histogram = new BehaviorSubject<boolean>(false);

  // global variable which detects if the new trade is added or not
  private newTrade = false;
  private newTradeList = true;

  currentLine = this.line.asObservable();
  currentHistogram = this.histogram.asObservable();

  constructor() {}

  changeGraph(line: boolean, histogram: boolean): any {
    this.line.next(line);
    this.histogram.next(histogram);
  }

  setNewTrade(val): any {
    this.newTrade = val;
  }
  getNewTrade(): any {
    return this.newTrade;
  }

  setNewTradeList(val): any {
    this.newTradeList = val;
  }
  getNewTradeList(): any {
    return this.newTradeList;
  }
}
