import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo, TodoDto } from '../todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  newTodo: TodoDto = {
    title: '',
    completed: false,
  };

  @Output() add = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.add.emit({...this.newTodo, id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)});
  }
}
