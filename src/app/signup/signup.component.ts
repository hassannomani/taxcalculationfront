import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username=""
  cpassword=""
  password=""
  tin=""
  email=""
  zone=""
  circle=""
  dob=""
  errorMsg=""
  buttonLabel: string = "Sign Up";
  buttonColor: string = "primary";
  buttonType: string = "submit";

  signup(){
    if(this.username==""||this.password==""||this.email==""||this.tin==""||this.zone==""||this.circle==""||this.dob=="")
      alert("Every field is mandatory")
    else
      console.log('ghg')
  }
}
