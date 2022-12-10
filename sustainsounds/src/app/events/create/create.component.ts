import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { IEvent } from 'src/app/shared/interfaces/event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    console.log('work');
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return console.log('wrong');
    console.log(form.value);
    this.eventsService.create(form.value).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
