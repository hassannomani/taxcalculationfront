import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http: HttpClient) { }
  private url : string ='http://localhost:8080/api/v1/payment/save';

  submitPayment(formData: any): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    console.log(formData)
    const body=JSON.stringify(formData);
    return this.http.post(this.url, body,{'headers':headers})
  }
}
