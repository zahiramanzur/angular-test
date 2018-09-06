import { Component, OnInit } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peoples: People[];
  
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples(): void{
    this.peopleService.getPeoples().subscribe(peoples => this.peoples = peoples);
  }
}
