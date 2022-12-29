import { Injectable } from '@angular/core';

export interface storageEntity {
  id: string,
  username: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})

export class LocalstorageService {

  constructor() { }

  saveStorageItems(obj :any){
    localStorage.setItem('token', JSON.stringify(obj.token));
    localStorage.setItem('id', JSON.stringify(obj.id));
    localStorage.setItem('username', JSON.stringify(obj.username));
  }

  getStorageItems(){
    let id = localStorage.getItem('id');
    let username = localStorage.getItem('username');
    let token = localStorage.getItem('token');
    let obj={
      "id": id,
      "username": username,
      "token": token
    }
    return obj;
  }
  deletetorageItems(){
    localStorage.clear();
  }
}
