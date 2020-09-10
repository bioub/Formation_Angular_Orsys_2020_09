import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";


@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ // ces modules deviennent disponible dans les modules qui importent Shared (par convention => tous les autres modules)
    CommonModule,
    MatButtonModule,
    SelectComponent,
    MatListModule,
  ]
})
export class SharedModule { }
