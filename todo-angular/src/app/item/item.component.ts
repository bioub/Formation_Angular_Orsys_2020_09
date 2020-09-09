import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, DoCheck {

  @Input() todo: Todo;
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }


  ngOnInit(): void {
  }

  handleDelete() {
    this.delete.emit(this.todo);
  }

  ngDoCheck(): void {
    console.log('item checked');
  }
}
