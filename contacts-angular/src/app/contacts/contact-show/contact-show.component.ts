import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { map, switchMap } from 'rxjs/operators';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.scss'],
})
export class ContactShowComponent implements OnInit {
  contact$: Observable<Contact>;
  // contact$: Subject<Contact>;

  // private subscription: Subscription;

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

    this.contact$ = this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id')),
        switchMap((id) => this.contactService.getById(id))
      );

      // this.contact$ = new Subject();
      // contact$.subscribe(this.contact$);
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
