import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Contact[]>(environment.baseApiUrl + '/users');
  }

  getById(id) {
    return this.httpClient.get<Contact>(environment.baseApiUrl + '/users/' + id).pipe(
      map((c: Contact) => ({id: c.id, name: c.name.toUpperCase(), email: c.email, phone: c.phone}))
    );
  }
}
