import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private line = new BehaviorSubject<boolean>(true);
  private histogram = new BehaviorSubject<boolean>(false);
  private newTrade = false;

  currentLine = this.line.asObservable();
  currentHistogram = this.histogram.asObservable();
  //currentNewTrade = this.newTrade.asObservable();

  constructor() {}

  changeGraph(line: boolean, histogram: boolean) {
    this.line.next(line);
    this.histogram.next(histogram);
  }
  // isnewTrade(newTrade: boolean) {
  //   this.newTrade.next(newTrade);
  // }
  setNewTrade(val): any {
    this.newTrade = val;
  }
  getNewTrade(): any {
    return this.newTrade;
  }
}
