import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { IEvent } from 'src/app/shared/interfaces/event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit, OnDestroy {
  eventsList: IEvent[] | null = null;
  errorFetchingData = false;

  constructor(private eventsService: EventsService, private router: Router) {}

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

  ngOnDestroy(): void {
    this.eventsList = null;
  }

  onDetailsClick(id: string): void {
    console.log(this.router);
    this.router.navigate([`/events/${id}`]);
  }
}
