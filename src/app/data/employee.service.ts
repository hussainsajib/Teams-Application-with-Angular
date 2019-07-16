import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeUrl = 'https://glacial-beyond-73904.herokuapp.com/positions'
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee []>{
    return this.http.get<Employee[]>(this.employeeUrl);
  }
}
