import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.todo = { id: 123, title: 'ABC', completed: false};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain todo title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('ABC');
  });

  it('should emit delete event when I click on button -', () => {
    component.delete.subscribe((todo) => {
      expect(todo.title).toBe('ABC');
    });

    const compiled: HTMLElement = fixture.nativeElement;
    const button = compiled.querySelector('button');

    button.dispatchEvent(new MouseEvent('click'));
  });
});
