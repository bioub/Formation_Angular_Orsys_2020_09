import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ContactsModule } from './contacts/contacts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContactService } from './contacts/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    MatToolbarModule, // ne contient que des composant/directive/pipe
    // l'importer ici permet de l'utiliser dans un des composants de AppModule
    // (si le composant/directive/pipe est utilisé partout, plutôt l'exporter dans Shared
    // exemple MatButtonModule)
    SharedModule,
    HttpClientModule, // ne contient que les providers
    // provider : config de création du service
    // ce type de module n'est à importer qu'une seul fois dans AppModule
    // sinon pas de Singleton
    BrowserModule,
    ContactsModule,
    BrowserAnimationsModule,
    AppRoutingModule, // en dernier pour la route NotFound
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
