import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from 'src/app/shared/interfaces/event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  event: IEvent | null = null;
  eventId!: string;
  currentDate: any = new Date();
  errorFetchingData = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute
  ) {}

  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, Validators.required],
    imageUrl: ['', Validators.pattern(new RegExp('^https?://'))],
    description: ['', Validators.minLength(20)],
  });

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.params['id'];

    this.eventsService.getOne(this.eventId).subscribe({
      next: (value) => {
        this.event = value;
        this.editForm.setValue({
          name: this.event.name,
          date: this.event.date,
          time: this.event.time,
          location: this.event.location,
          price: this.event.price,
          imageUrl: this.event.imageUrl || null,
          description: this.event.description || null,
        });
        console.log(this.editForm.errors);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }

  edit(): void {
    if (this.editForm.invalid) return;

    const payload = {
      name: this.editForm.value.name as string,
      date: this.editForm.value.date as string,
      time: this.editForm.value.time as string,
      location: this.editForm.value.location as string,
      price: this.editForm.value.price as unknown as number,
      imageUrl: this.editForm.value.imageUrl as string,
      description: this.editForm.value.description as string,
    };

    this.eventsService.edit(this.eventId, payload).subscribe({
      next: (res) => this.router.navigate(['/events']),
      error: (err) => console.log(err),
    });
  }
}
