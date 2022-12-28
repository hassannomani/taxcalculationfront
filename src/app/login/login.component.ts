import { SigninService, signedInUser } from './../service/login/signin.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { ToBeSignedInUser,SigninService } from './../service/users/alllist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    'username' : new FormControl('',[Validators.required, Validators.minLength(5)]),
    'password' : new FormControl('',[Validators.required, Validators.minLength(6)])
  })

  buttonLabel: string= "Log In"
  buttonColor: string = "primary"
  buttonType: string = "submit"
  constructor(
    private signinService: SigninService
    ){}

  login(){
    
  
    console.log(this.loginForm.value)
    if(this.loginForm.value.username!=""&&this.loginForm.value.password!=""){
      this.signinService
      .postVerifyUsers(this.loginForm.value)
      .subscribe(data => {
        console.log(data)
        //console.log(data)
      });
    }
    
    
  }
}
