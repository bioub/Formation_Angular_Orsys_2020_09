import { Component } from '@angular/core';
import { Todo, TodoDto } from './todo.model';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [
    { id: 123, title: 'Céréales', completed: false },
    { id: 234, title: 'Pomme', completed: true },
  ];

  // todos: Todo[] = new Array(2000).fill({}).map((t) => ({
  //   id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
  //   title: 'ABC',
  //   completed: Math.random() > 0.5,
  // }));

  handleAdd(todo) {
    // Changement muable
    // this.todos.unshift(todo);

    // Changement immuable
    this.todos = [todo, ...this.todos];
  }

  handleDelete(todo: Todo) {
    // Changement muable
    // const index = this.todos.findIndex((t) => t.id === todo.id);
    // this.todos.splice(index, 1);

    // Changement immuable
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
}
