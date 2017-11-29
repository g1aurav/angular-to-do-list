import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';

import { List }       from './list';
import { TODOS }      from './todos';

@Injectable()
export class ListService {

  constructor() { }

  /** GET heroes from the server */
  getTodos (): Observable<List[]> {
    return of(TODOS);
  }

}
