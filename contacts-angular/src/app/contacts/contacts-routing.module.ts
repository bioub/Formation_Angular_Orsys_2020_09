import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { intIdMatcher } from '../shared/int-id.matcher';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';

/*
Exercice :
Générer 4 composants :
- contacts/contacts
- contacts/contacts-list
- contacts/contact-show
- contacts/contact-create

Ajouter 3 routes dans ce fichiers :
- URL /contacts -> ContactsComponent
- URL /contacts/create -> ContactCreateComponent
- URL /contacts/:id -> ContactShowComponent

Importer ContactsModule dans AppModule
(attention à l'ordre des modules, rapport à NotFound qui doit etre à la fin)

*/



const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      {
        path: 'create',
        component: ContactCreateComponent,
      },
      {
        //  path: ':id',
        matcher: intIdMatcher,
        component: ContactShowComponent,
        children: [{
          path: 'delete',
          component: ContactDeleteComponent,
        }]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
