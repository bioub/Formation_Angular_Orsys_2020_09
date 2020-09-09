import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class TodolistComponent implements OnInit, AfterViewInit {
  newTodo = "Chocolat";
  todos = ["Céréales", "Pomme"];

  @ViewChild('inputEl') inputEl: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    
  }

  add() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
    this.inputEl.nativeElement.focus();
  }
}
