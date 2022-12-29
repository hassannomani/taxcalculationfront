import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-menu',
  templateUrl: './logout-menu.component.html',
  styleUrls: ['./logout-menu.component.css']
})
export class LogoutMenuComponent implements OnInit{
  username = ""
  constructor(
    private router: Router
    ){}
  ngOnInit(){
    let retrievedObject = localStorage.getItem('username');
    if(retrievedObject)
      this.username=retrievedObject;
    else
      this.username="";
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);

  }
 
}
