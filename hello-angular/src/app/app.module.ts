import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SelectComponent } from './select/select.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ClockComponent } from './clock/clock.component';
import { ButtonComponent } from './button/button.component';
import { HelloTemplateDrivenFormComponent } from './hello-template-driven-form/hello-template-driven-form.component';
import { HelloReactiveFormComponent } from './hello-reactive-form/hello-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SelectComponent,
    TodolistComponent,
    ClockComponent,
    ButtonComponent,
    HelloTemplateDrivenFormComponent,
    HelloReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Template Driven Form
    ReactiveFormsModule, // Reactive Form
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
