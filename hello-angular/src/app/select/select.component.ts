import { Component, OnInit, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() values = ['Rouge', 'Vert', 'Blue']
  @Input() selectedValue = "Vert";
  opened = false;

  @Output() selectedValueChange = new EventEmitter<string>();


  constructor(private hostElement: ElementRef) {
    console.log(this.selectedValue); // Vert
   }
  // private hostElement: ElementRef
  // constructor(hostElement: ElementRef) { 
  //   this.hostElement: ElementRef;
  // }


  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    if (!this.hostElement.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }

  ngOnInit(): void {
    console.log(this.selectedValue); // Eric
  }

  handleSelection(val: string) {
    this.selectedValue = val;
    this.opened = false;

    this.selectedValueChange.emit(val);
  }
}
