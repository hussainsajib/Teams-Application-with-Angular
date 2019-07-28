import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Position } from '../data/position';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  paramSubscription: any;
  positionSubscription: any;
  savePositioinSubscription: any;
  position: Position;
  successMessage = false;
  failMessage = false;

  constructor(private p: PositionService, private r: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.r.snapshot.paramMap.get('_id');
    this.positionSubscription = this.p.getPosition(this.paramSubscription).subscribe(position => this.position = position[0]);
  }

  onSubmit(){
    this.savePositioinSubscription = this.p.savePosition(this.position).subscribe(
      success => {
        this.successMessage = true;
        setTimeout(() => this.successMessage = false, 2500 );
      }, failure => {
        this.failMessage = true;
        setTimeout(() => this.failMessage = false, 2500 );
      }
    );
  }

}
