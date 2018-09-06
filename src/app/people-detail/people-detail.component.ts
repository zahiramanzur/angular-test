import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  @Input() people: People;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void{
    const dni = +this.route.snapshot.paramMap.get('dni');
    this.peopleService.getPeople(dni).subscribe(people => this.people = people);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.peopleService.updatePeople(this.people)
      .subscribe(() => this.goBack());
  }


}
