import { Component, OnInit } from '@angular/core';

import { List }              from '../list';
import { TODOS }             from '../todos';
import { ListService }       from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getTodos();
  }

  todos: List[];

  getTodos(): void {
    this.listService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

}
