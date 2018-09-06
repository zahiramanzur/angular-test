import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples = PEOPLE;

  selectedPeople: People;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(people: People): void{
    this.selectedPeople = people;
  }
}
