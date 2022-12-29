import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class AlllistService {

  //private url : string ='https://api.github.com/users';
  private url : string ='http://localhost:8080/api/v1/users/all';
  private url1 : string ='http://localhost:8080/api/v1/users/profile/';

  constructor(private http: HttpClient) {}

  getTaxPayers(): Observable<TaxPayer[]>{
    return this.http.get<TaxPayer[]>(this.url)
  }

  getATaxPayer(id:any): Observable<TaxPayer>{
    return this.http.get<TaxPayer>(this.url1+id)
  }


}
