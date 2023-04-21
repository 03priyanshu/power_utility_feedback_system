import { Component } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{
  feedback: string = '';

  constructor(private feedbackService: FeedbackService) { }

  onSubmit() {
    this.feedbackService.addFeedback(this.feedback);
    console.log(this.feedbackService.getFeedbackList());
    
    this.feedback = '';
  }
}
