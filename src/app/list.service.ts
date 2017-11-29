import { Injectable }              from '@angular/core';
import { Observable }              from 'rxjs/Observable';
import { of }                      from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap }    from 'rxjs/operators';

import { List }       from './list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {

  constructor(private http: HttpClient) {
   }

   private logger(message: string) {
    console.log(message)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.logger(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private url = `api/todos`;

  /** GET todos from the server */
  getTodos (): Observable<List[]> {
    return this.http.get<List[]>(this.url)
    .pipe(
      tap(todos => this.logger(`fetched list`)),
      catchError(this.handleError(`getTodos`, []))
    )
  }

  toggleStatus (todo: List): Observable<List> {
    return this.http.put(this.url, todo, httpOptions).pipe(
      tap((todo: List) => this.logger(`updated ToDo ${todo}`)),
      catchError(this.handleError<any>('addHero', []))
    )
  }

}
