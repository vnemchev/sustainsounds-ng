import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | null = null;
  errorFetchingData = false;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getOne().subscribe({
      next: (value) => {
        this.event = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }
}
