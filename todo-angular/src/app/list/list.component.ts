import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input() items: Todo[];
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {

  }

  handleDelete(todo: Todo) {
    this.delete.emit(todo);
  }
}
