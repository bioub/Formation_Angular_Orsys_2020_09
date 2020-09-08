import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  newTodo = 'Chocolat';
  todos = ['Céréales', 'Pomme']

  constructor() { }

  ngOnInit(): void {
  }

}
