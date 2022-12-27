import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";

  login(){
    if(this.username==""||this.password==""){
      this.errorMsg="Username and Password must not be blank"
    }
  }
}
