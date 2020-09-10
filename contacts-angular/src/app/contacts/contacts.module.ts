import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent,
    ContactShowComponent,
    ContactCreateComponent,
    ContactDeleteComponent,
  ],
  imports: [SharedModule, ContactsRoutingModule],
})
export class ContactsModule {}
