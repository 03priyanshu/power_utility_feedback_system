import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signupData: any[] = [];

  addSignupData(formData: any) {
    this.signupData.push(formData);
  }

  getSignupData() {
    return this.signupData;
  }
}