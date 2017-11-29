import { Component, OnInit } from '@angular/core';

import { List }              from '../list';
import { ListService }       from '../list.service';

@Component({
  selector: 'app-list-incomplete',
  templateUrl: './list-incomplete.component.html',
  styleUrls: ['./list-incomplete.component.css']
})
export class ListIncompleteComponent implements OnInit {
  constructor(private listService: ListService) { }
  
    ngOnInit() {
      this.getTodos();
    }
  
    todos: List[];
  
    getTodos(): void {
      this.listService.getTodos()
        .subscribe(todos => this.todos = todos.filter(todo => !todo.isCompleted));
    }
  
    toggleStatus(todo: List): void {
      // const data = new List(todo.id, todo.text, false);
      // console.log(`Data before sending  ${data}`);
      this.listService.toggleStatus({id: todo.id, text: todo.text, isCompleted: !todo.isCompleted} as List).subscribe(todo => this.getTodos());
    }
}
