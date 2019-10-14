import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}} .{{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  //public employees=[
  //  {"id":1, "name" : "Numery", "age": 35},
  //  {"id":2, "name" : "Brandon", "age": 30},
  //  {"id":3, "name" : "Christina", "age": 26},
  //  {"id":4, "name" : "Elena", "age": 28},
 // ]

 public employees=[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}
