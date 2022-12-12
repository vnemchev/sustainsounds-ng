import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

import { IEvent } from 'src/app/shared/interfaces/event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | null = null;
  eventId!: string;
  isOwner: boolean | null = null;
  errorFetchingData = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.params['id'];

    this.eventsService.getOne(this.eventId).subscribe({
      next: (value) => {
        this.event = value;
        this.isOwner = this.authService.isOwner(this.event?._ownerId as string);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  onEdit() {
    this.router.navigate([`/events/${this.eventId}/edit`]);
  }

  onDelete() {}
}
