import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private line = new BehaviorSubject<boolean>(true);
  currentLine = this.line.asObservable();

  constructor() { }

  changeGraph(line: boolean){
    console.log('change graph');
    this.line.next(line);
  }
}
