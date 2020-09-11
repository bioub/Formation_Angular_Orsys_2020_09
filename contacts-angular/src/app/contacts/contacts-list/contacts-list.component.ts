import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private title: Title, private contactService: ContactService) {}

  ngOnInit(): void {
    this.title.setTitle('Contacts List');

    this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });

    this.contactService.add.subscribe((contact: Contact) => {
      this.contacts.push(contact);
    });
  }
}
