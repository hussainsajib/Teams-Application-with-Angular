import { Component, OnInit } from '@angular/core';

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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService<Employee[]>.getEmployee();
  }

}
