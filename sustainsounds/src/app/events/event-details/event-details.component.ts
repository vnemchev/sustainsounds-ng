import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from 'src/app/shared/interfaces/event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  eventId!: string;
  event: IEvent | null = null;
  errorFetchingData = false;

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.params['id'];

    this.eventsService.getOne(this.eventId).subscribe({
      next: (value) => {
        this.event = value;
        console.log(this.event);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }
}
