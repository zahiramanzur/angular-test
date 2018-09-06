import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { People } from './people';
import { PEOPLE } from './mock-people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  getPeoples(): Observable<People[]>{
    return of(PEOPLE);
  }
  constructor() { }
}
