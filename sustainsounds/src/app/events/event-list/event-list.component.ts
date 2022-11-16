import { Component, OnInit } from '@angular/core';

import { IEvent } from 'src/app/interfaces/event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  eventsList: IEvent[] | null = null;
  errorFetchingData = false;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getAll().subscribe({
      next: (value) => {
        this.eventsList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }
}
