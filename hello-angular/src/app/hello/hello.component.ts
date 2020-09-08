import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name = 'Romain';

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.name = this.name.toUpperCase();
    // }, 5000);
  }

}
