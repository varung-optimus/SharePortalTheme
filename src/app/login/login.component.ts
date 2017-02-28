import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isNewUser = false;
  public isForgotPasswordEnabled = false;
  
  constructor() { }

  ngOnInit() {
  }


  onSignUpClicked() {
    this.isNewUser = true;
    this.isForgotPasswordEnabled = false;
  }

}
