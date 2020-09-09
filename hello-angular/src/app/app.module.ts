import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SelectComponent } from './select/select.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ClockComponent } from './clock/clock.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SelectComponent,
    TodolistComponent,
    ClockComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
