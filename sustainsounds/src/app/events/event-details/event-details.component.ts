import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from 'src/app/artists/artists.service';
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
    private eventsService: EventsService,
    private userService: ArtistsService
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

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  onAttend() {
    this.userService
      .attendEvent(this.authService.user?._id as string, this.eventId)
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });
  }

  onEdit(): void {
    this.router.navigate([`/events/${this.eventId}/edit`]);
  }

  onDelete(): void {
    this.eventsService.delete(this.eventId).subscribe({});
    this.router.navigate(['/events']);
  }

  onBack(): void {
    this.router.navigate(['/events']);
  }
}
