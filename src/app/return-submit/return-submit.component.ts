import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-return-submit',
  templateUrl: './return-submit.component.html',
  styleUrls: ['./return-submit.component.css']
})
export class ReturnSubmitComponent {
  returnForm = new FormGroup({
    'assessmentYear' : new FormControl('',[Validators.required]),
    'tin' : new FormControl('',[Validators.required]),
    'gender' : new FormControl('',[Validators.required]),
    'salary' : new FormControl('',[Validators.required]),
    'houserent' : new FormControl('',[Validators.required]),
    'festivalbonus' : new FormControl('',[Validators.required]),
    'investment' : new FormControl('',[Validators.required]),
    'sourcetax' : new FormControl('',[Validators.required]),
    'amount': new FormControl('',[Validators.required])
  })
  failed: boolean = false
  buttonLabel: string= "Log In"
  buttonColor: string = "primary"
  buttonType: string = "submit"

  returnSubmit(){
    
  }
}
