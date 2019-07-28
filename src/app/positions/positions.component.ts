import { Component, OnInit } from '@angular/core';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service'

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: Position[];
  getPositionSub: any;
  loadingError: boolean = false;

  constructor(private m: PositionService) { }

  ngOnInit() {
    this.getPositions();
  }

  getPositions(){
    this.getPositionSub = this.m.getPositions().subscribe(positions=>this.positions = positions, error=>this.loadingError = true);
  }

  ngOnDestroy(){
    if(this.getPositionSub != undefined){
      this.getPositionSub.unsubscribe();
    }
  }

}
