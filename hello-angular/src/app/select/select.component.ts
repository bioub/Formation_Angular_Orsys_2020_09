import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  values = ['Rouge', 'Vert', 'Blue']
  selectedValue = "Vert";
  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

}