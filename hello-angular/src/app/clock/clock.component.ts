import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  now = new Date();

  private _interval;

  constructor() { 
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.delay.isFirstChange()) {
      clearInterval(this._interval);
    }

    this._interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  ngOnInit(): void {
    
  }  

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

}
