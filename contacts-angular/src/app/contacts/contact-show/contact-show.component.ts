import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.scss'],
})
export class ContactShowComponent implements OnInit {
  contact: Contact = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   const id = paramMap.get('id');
    //   this.contactService.getById(id).subscribe((contact) => {
    //     this.contact = contact;
    //   })
    // });

    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        switchMap((id) => this.contactService.getById(id))
      )
      .subscribe((contact) => {
        this.contact = contact;
      });
  }
}
