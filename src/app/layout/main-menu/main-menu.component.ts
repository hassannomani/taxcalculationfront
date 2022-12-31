import { Component, OnInit } from '@angular/core';
import { storageEntity,LocalstorageService } from 'src/app/service/storage/localstorage.service';
import { SigninService  } from 'src/app/service/login/signin.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  constructor(
    private localstorageServ: LocalstorageService,
    private signinserv: SigninService
  ){}
  showlogIn = true;
  ngOnInit(){
    let retrievedObject = this.signinserv.loginStatusChange().subscribe(loggedIn => {
      //alert(loggedIn)
      if(loggedIn==true)
        this.showlogIn=false;
      else
        this.showlogIn=true;
    })
  }
}
