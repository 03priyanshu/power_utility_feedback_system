import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FeedbackService {
  private feedbackList: string[] = [];

  constructor() { }

  addFeedback(feedback: string) {
    this.feedbackList.push(feedback);
  }

  getFeedbackList() {
    return this.feedbackList;
  }
}