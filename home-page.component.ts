import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  userID:string = '';
  passwd:string = '';
  userIdValid = false;
  passwordValid = false;

  constructor(private Rt: Router){}

  validateuserID(): void {
    const mobileNumberRegex = /\d{4}$/; 
    this.userIdValid = mobileNumberRegex.test(this.userID);    
    if(!this.userIdValid){
      alert('Enter Your Unique Customer-ID')
    }
  }
  
  validatePassword(): void {
     // Regular expression for a password that contains at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long
    
    if(this.passwd == ''){
      alert('Enter Password')
    }
    else{
      this.passwordValid = true
    }
  }

  router(): void{
    this.validateuserID()
    this.validatePassword()

    if(this.userIdValid && this.passwordValid){
      this.Rt.navigate(["option"])
    }
    
  }
}
