import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IEmployee} from "./employee";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees1.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    console.log(this._url);
    return this.http.get<IEmployee[]>(this._url)
                .catch(this.errorHandler);                                         
  }

  //getEmployees(): Observable<IEmployee[]>{
  //  return this.http.get<IEmployee[]>(this._url);
  
  //}



  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
