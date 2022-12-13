import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { EventsService } from '../events.service';
import { IEventPayload } from 'src/app/shared/interfaces/configs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {
  currentDate: any = new Date();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private eventsService: EventsService
  ) {}

  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', Validators.required],
    imageUrl: ['', Validators.pattern(new RegExp('^https?://'))],
    description: ['', Validators.minLength(20)],
  });

  ngOnInit(): void {}

  create(): void {
    if (this.createForm.invalid) return;

    const payload = {
      name: this.createForm.value.name as string,
      date: this.createForm.value.date as string,
      time: this.createForm.value.time as string,
      location: this.createForm.value.location as string,
      price: this.createForm.value.price as unknown as number,
      imageUrl: this.createForm.value.imageUrl as string,
      description: this.createForm.value.description as string,
    };

    this.eventsService.create(payload).subscribe({
      next: (res) => this.router.navigate(['/events']),
      error: (err) => console.log(err),
    });
  }
}
