import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  cacheList$: ReplaySubject<Contact[]>;
  cacheListDate: number;

  add = new EventEmitter<Contact>();

  constructor(private httpClient: HttpClient) {}

  getAll() {
    // Mise en cache pendant 20 secondes maximum
    if (!this.cacheList$ || this.cacheListDate + 20 * 1000 < Date.now()) {
      this.cacheListDate = Date.now();
      this.cacheList$ = new ReplaySubject(1);
      this.httpClient
        .get<Contact[]>(environment.baseApiUrl + '/users')
        .subscribe(this.cacheList$);
    }

    return this.cacheList$;
  }

  getById(id) {
    return this.httpClient
      .get<Contact>(environment.baseApiUrl + '/users/' + id)
      .pipe(
        map((c: Contact) => ({
          id: c.id,
          name: c.name.toUpperCase(),
          email: c.email,
          phone: c.phone,
        }))
      );
  }

  create(contact: Contact) {
    return this.httpClient.post<Contact>(environment.baseApiUrl + '/users', contact).pipe(
      tap((contact: Contact) => this.add.emit(contact))
    );
  }
}
