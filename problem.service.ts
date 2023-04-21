import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {
  private problemlist: string[] = [];

  addProblem(problem: string) {
    this.problemlist.push(problem);
  }

  getProblemList() {
    return this.problemlist;
  }  
  
  constructor() { }
}
