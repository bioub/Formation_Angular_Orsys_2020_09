import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl(''),
  });

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name');
  }

  create() {
    this.contactService.create(this.form.value).subscribe((contact: Contact) => {
      // ajouter au tableau
      this.router.navigate(['contacts']);
    });
  }
}
