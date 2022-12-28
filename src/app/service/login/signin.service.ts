import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface signedInUser{
  token: String
}
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private url : string ='http://localhost:8080/api/v1/users/login';
  constructor(private http: HttpClient) {}

  postVerifyUsers(formData:any): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(formData);
    console.log(body)
    return this.http.post(this.url, body,{'headers':headers})
  }
}
