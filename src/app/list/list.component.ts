import { Component, OnInit } from '@angular/core';

import { List }              from '../list';
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

  toggleStatus(todo: List): void {
    // const data = new List(todo.id, todo.text, false);
    // console.log(`Data before sending  ${data}`);
    this.listService.toggleStatus({id: todo.id, text: todo.text, isCompleted: !todo.isCompleted} as List).subscribe(todo => this.getTodos());
  }

}
