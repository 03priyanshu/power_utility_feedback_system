import { Component } from '@angular/core';
import { ProblemService } from '../services/problem.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent {
  problem: string = '';

  constructor(private problemservice:ProblemService){  }    

  onSubmit() {
    this.problemservice.addProblem(this.problem);
    console.log(this.problemservice.getProblemList());
  }

}
