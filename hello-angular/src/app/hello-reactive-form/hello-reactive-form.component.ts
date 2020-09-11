import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello-reactive-form',
  templateUrl: './hello-reactive-form.component.html',
  styleUrls: ['./hello-reactive-form.component.css']
})
export class HelloReactiveFormComponent implements OnInit {

  name = new FormControl('Romain', [Validators.required])

  constructor() { }

  ngOnInit(): void {
    this.name.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

}
