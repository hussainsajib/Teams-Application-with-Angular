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
  constructor(private m: PositionService) { }

  ngOnInit() {
    this.getPositions();
  }

  getPositions(){
    this.m.getPosition().subscribe(positions=>this.positions = positions);
  }

}
