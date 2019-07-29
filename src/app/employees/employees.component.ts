import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError = false;
  filteredEmployees: Employee[];

  constructor(private m: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){
    this.getEmployeesSub = this.m.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.filteredEmployees = employees;
    }, error => this.loadingError = true);
  }
  ngOnDestroy(){
    this.getEmployeesSub.unsubscribe();
  }

  routeEmployee(id: string){
    this.router.navigate([`/employee/${id}`]);
  }

}
