import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeeRaw } from './employee-raw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeUrl = 'https://glacial-beyond-73904.herokuapp.com'
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee []>{
    return this.http.get<Employee[]>(`${this.employeeUrl}/employees`);
  }

  saveEmployee(employee: EmployeeRaw): Observable<any>{
    return this.http.put<any>(`${this.employeeUrl}/employee/${employee._id}`, employee);
  }

  getEmployee(id): Observable<EmployeeRaw[]>{
    return this.http.get<EmployeeRaw[]>(`${this.employeeUrl}/employee-raw/${id}`);
  }

}
