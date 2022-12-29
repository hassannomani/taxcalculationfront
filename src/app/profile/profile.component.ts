import { Component, OnInit } from '@angular/core';
import { TaxPayer, AlllistService } from './../service/users/alllist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  tUser: TaxPayer = {
    uuid: "",
    username: "",
    email: "",
    role: "",
    tin: "",
    zone: "",
    circle: "",
    dob: new Date()
  };
  constructor(
    private alllistService:  AlllistService
  ){}

  ngOnInit(){
    let retrievedObject = localStorage.getItem('id');
    let finalId =  retrievedObject?JSON.parse(retrievedObject):"";
    console.log(finalId)
    this.alllistService
      .getATaxPayer(finalId)
      .subscribe(data => {
        console.log(data)
        this.tUser = data;
       
      });
  }


}
