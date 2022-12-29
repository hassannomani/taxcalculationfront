import { SigninService, signedInUser } from './../service/login/signin.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//import { ToBeSignedInUser,SigninService } from './../service/users/alllist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  loginForm = new FormGroup({
    'username' : new FormControl('',[Validators.required, Validators.minLength(4)]),
    'password' : new FormControl('',[Validators.required, Validators.minLength(4)])
  })
  failed: boolean = false
  buttonLabel: string= "Log In"
  buttonColor: string = "primary"
  buttonType: string = "submit"
  constructor(
    private signinService: SigninService,
    private router: Router
    ){}

  login(){
    
  
    console.log(this.loginForm.value)
    if(this.loginForm.value.username!=""&&this.loginForm.value.password!=""){
      this.signinService
      .postVerifyUsers(this.loginForm.value)
      .subscribe({
        
        next: (data) => {
          if(data?.token!=""){
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('id', JSON.stringify(data.id));
            localStorage.setItem('username', JSON.stringify(data.username));
            this.router.navigate(['profile']);

          } 
          else{
            this.failed = true
          }
        },
        error: (e) => {
          this.failed = true
        }
        
      });
    }
    
    
  }
}
