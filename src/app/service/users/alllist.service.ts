import { LocalstorageService } from './../storage/localstorage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface TaxPayer {
  uuid: string,
  username: string,
  email: string,
  role: string,
  tin: string,
  zone: string,
  circle: string,
  dob: Date
  }
  export interface Returns{
    uuid: string,
    tinNo: string,
    amount: string,
    assessmentYear: string,
    getway: string,
    mobile: string,
    created_at: string
  }

@Injectable({
  providedIn: 'root'
})
export class AlllistService {

  //private url : string ='https://api.github.com/users';
  private url : string ='http://localhost:8080/api/v1/users/all';
  private url1 : string ='http://localhost:8080/api/v1/users/profile/';
  private url2 : string ='http://localhost:8080/api/v1/payment/all';
  private url3 : string ='http://localhost:8080/api/v1/payment/payment-id/';

  constructor(
    private http: HttpClient,
    private localstorageserv: LocalstorageService
  ) {}

  getTaxPayers(): Observable<TaxPayer[]>{
    return this.http.get<TaxPayer[]>(this.url)
  }

  getATaxPayer(id:any): Observable<TaxPayer>{
    return this.http.get<TaxPayer>(this.url1+id)
  }

  
  getReturns(): Observable<Returns[]>{
    let object = this.localstorageserv.getStorageItems()
    let token = ""
    if(object?.token){
      token = object.token;
      var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+token 
      })

      const httpOptions = {
        headers: headers_object
      };

      return this.http.get<Returns[]>(this.url2, httpOptions)
    }else
    return this.http.get<Returns[]>(this.url2)

      
  }

  getAReturn(uuid : any): Observable<Returns>{
    return this.http.get<Returns>(this.url3+uuid)
  }

}
