import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Exercice :
Générer 4 composants :
- contacts/contacts
- contacts/contacts-list
- contacts/contact-show
- contacts/contact-create

Importer ContactsModule dans AppModule
(attention à l'ordre des modules, rapport à NotFound qui doit etre à la fin)

Ajouter 3 routes dans ce fichiers :
- URL /contacts -> ContactsComponent
- URL /contacts/create -> ContactCreateComponent
- URL /contacts/:id -> ContactShowComponent
*/

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
