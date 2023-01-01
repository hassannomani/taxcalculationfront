import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LocalstorageService } from '../service/storage/localstorage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  constructor(
   
    private storageServ : LocalstorageService
    ){}

    ngOnInit(): void {
      
    }
    
    paymentSubmit(){

    }
}
