import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private line = new BehaviorSubject<boolean>(true);
  private histogram = new BehaviorSubject<boolean>(false);

  currentLine = this.line.asObservable();
  currentHistogram = this.histogram.asObservable();

  constructor() { }

  changeGraph(line: boolean, histogram: boolean){
    console.log('change graph');
    this.line.next(line);
    this.histogram.next(histogram);
  }
}
