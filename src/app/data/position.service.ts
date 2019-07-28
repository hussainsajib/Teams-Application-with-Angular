import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Position } from './position';

@Injectable({
  providedIn: 'root'
})

export class PositionService {
  positionUrl = 'https://glacial-beyond-73904.herokuapp.com';
  constructor(private http: HttpClient) { }

  getPosition(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.positionUrl}/positions`);
  }

  savePosition(position: Position): Observable<any>{
    return this.http.put<any>(`${this.positionUrl}/position/${position._id}`, position);
  }
}
