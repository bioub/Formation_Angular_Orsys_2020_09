import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, DoCheck {

  constructor() { }
  ngDoCheck(): void {
   console.log('button checked');
   
  }

  ngOnInit(): void {
  }



}
