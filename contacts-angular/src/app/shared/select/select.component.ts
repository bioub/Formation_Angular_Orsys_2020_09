import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit, AfterContentInit {
  @Input() values: string[] = [];
  @Input() selectedValue: string;
  opened = false;

  @Output() selectedValueChange = new EventEmitter<string>();

  @ContentChild('tplItem', { read: TemplateRef }) tplItem: TemplateRef<any>;

  constructor(private hostElement: ElementRef) {
    console.log('constructor', this.tplItem);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.tplItem);
  }
  // private hostElement: ElementRef
  // constructor(hostElement: ElementRef) {
  //   this.hostElement: ElementRef;
  // }

  ngOnInit(): void {
    console.log('ngOnInit', this.tplItem);
    if (this.values.length && !this.selectedValue) {
      this.selectedValue = this.values[0];
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    if (!this.hostElement.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }

  handleSelection(val: string) {
    this.selectedValue = val;
    this.opened = false;

    this.selectedValueChange.emit(val);
  }
}
