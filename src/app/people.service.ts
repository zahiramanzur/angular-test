import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { People } from './people';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleUrl = 'api/peoples';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPeoples(): Observable<People[]>{
    return this.http.get<People[]>(this.peopleUrl)
    .pipe(
      tap(people => this.log('fetched peoples')),
      catchError(this.handleError('getPeoples', []))
    );
  }

  getPeopleNo404<Data>(dni: number): Observable<People>{
    const url = `${this.peopleUrl}/?dni=${dni}`;
  return this.http.get<People[]>(url).pipe(
    map(peoples => peoples[0]),
    tap(h => {
      const outcome = h ? `fetched` : `did not find`;
      this.log(`${outcome} people dni=${dni}`);
    }),
    catchError(this.handleError<People>(`getPeople dni=${dni}`))
  );
  }

  getPeople(dni: number): Observable<People> {
    const url = `${this.peopleUrl}/${dni}`;
    return this.http.get<People>(url).pipe(
      tap(_ => this.log(`fetched people dni=${dni}`)),
      catchError(this.handleError<People>(`getPeople dni=${dni}`))
    );
  }

  updatePeople (people: People): Observable<any> {
    return this.http.put(this.peopleUrl, people, httpOptions).pipe(
      tap(_ => this.log(`updated people dni=${people.dni}`)),
      catchError(this.handleError<any>('updatePeople'))
    );
  }

  addPeople (people: People): Observable<People> {
    return this.http.post<People>(this.peopleUrl, people, httpOptions).pipe(
      tap((people: People) => this.log(`added people w/ dni=${people.dni}`)),
      catchError(this.handleError<People>('addPeople'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    private log(message: string) {
    this.messageService.add(`PeopleService: ${message}`);
  }
}

