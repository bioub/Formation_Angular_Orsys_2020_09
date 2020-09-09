import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prenoms = ['Jean', 'Eric', 'Paul'];
  selectedPrenom = 'Eric';

  showClock = true;
  delay = 1000;
}
