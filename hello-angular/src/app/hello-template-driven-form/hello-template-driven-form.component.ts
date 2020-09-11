import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-template-driven-form',
  templateUrl: './hello-template-driven-form.component.html',
  styleUrls: ['./hello-template-driven-form.component.css']
})
export class HelloTemplateDrivenFormComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit(): void {
  }

}
