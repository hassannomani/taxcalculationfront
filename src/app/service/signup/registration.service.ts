import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  private url : string ='http://localhost:8080/api/v1/users/register';
  constructor(private http: HttpClient) {}

  postCreateUsers(formData:any): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(formData);
    console.log(body)
    return this.http.post(this.url, body,{'headers':headers})
  }
}
