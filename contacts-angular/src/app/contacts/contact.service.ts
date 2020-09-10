import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id) {
    return this.httpClient.get<Contact>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
