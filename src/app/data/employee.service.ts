import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeeRaw } from './employee-raw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeUrl = 'https://glacial-beyond-73904.herokuapp.com/employees'
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee []>{
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  saveEmployee(employee: EmployeeRaw){
    return this.http.put(`${this.employeeUrl}/employee/${employee._id}`, employee);
  }


}
