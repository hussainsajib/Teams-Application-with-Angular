import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRaw } from '../data/employee-raw';
import { Position } from '../data/position';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private r: ActivatedRoute, private m: EmployeeService, private p: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.r.snapshot.paramMap.get('_id');
    this.employeeSubscription = this.m.getEmployee(this.paramSubscription).subscribe(employee => this.employee = employee[0]);
    this.getPositionsSubcription = this.p.getPosition(this.paramSubscription).subscribe(positions => this.positions = positions);
  }

  onSubmit(){
    this.saveEmployeeSubscription = this.m.saveEmployee(this.employee).subscribe(success => {
      this.successMessage = true;
      setTimeout(() => this.successMessage = false, 2500);
    }, failure => {
      this.failMessage = true;
      setTimeout(() => this.failMessage = false, 2500);
    });
  }

  ngOnDestroy(){
    if ( this.paramSubscription) { this.paramSubscription.unsubscribe(); }
    if ( this.employeeSubscription ) { this.employeeSubscription.unsubscribe(); }
    if ( this.getPositionsSubcription ) { this.getPositionsSubcription.unsubscribe(); }
    if ( this.saveEmployeeSubscription ) { this.saveEmployeeSubscription.unsubscribe(); }
  }

}
