import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupData = {
    Customername: '',
    cusID: '',
    mno: '',
    addr: '',
    emailID: ''
  };
  constructor(private signupService: SignupService) {}

  onSubmit() {
    this.signupService.addSignupData(this.signupData);
    console.log(this.signupService.getSignupData());
  }

}
