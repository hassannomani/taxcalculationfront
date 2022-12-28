import { Component, OnInit } from '@angular/core';
import { TaxPayer, AlllistService } from './../service/users/alllist.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  tUsers: TaxPayer[] = [];
  displayedColumns:string[]=[]; 
  //labelPosition: string = "right";

  constructor(
    private alllistService:  AlllistService
    ){}


  ngOnInit(){
    this.alllistService
      .getTaxPayers()
      .subscribe(data => {
        console.log(data)
        this.tUsers = data;
        this.displayedColumns = [ 'uuid','username','email','role','tin','zone','circle','dob']
      });
  }
}
