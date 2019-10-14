import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name" : "Numery", "age": 35},
      {"id":2, "name" : "Brandon", "age": 30},
      {"id":3, "name" : "Christina", "age": 26},
      {"id":4, "name" : "Elena", "age": 28},
    ];
  }
}
