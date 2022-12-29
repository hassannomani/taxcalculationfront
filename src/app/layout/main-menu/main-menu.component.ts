import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  showlogIn = true;
  ngOnInit(){
    let retrievedObject = localStorage.getItem('id');
    if(retrievedObject)
      this.showlogIn=false;
    else
      this.showlogIn=true;
  }
}
