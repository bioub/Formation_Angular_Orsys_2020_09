import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { KebabPipe } from './kebab.pipe';

@NgModule({
  declarations: [
    SelectComponent,
    KebabPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [ // ces modules deviennent disponible dans les modules qui importent Shared (par convention => tous les autres modules)
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SelectComponent,
    MatListModule,
    KebabPipe
  ]
})
export class SharedModule { }
