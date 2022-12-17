import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from 'src/app/artists/artists.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IArtist } from 'src/app/shared/interfaces/artist';
import { IUser } from 'src/app/shared/interfaces/configs';

import { IEvent } from 'src/app/shared/interfaces/event';
import { IFan } from 'src/app/shared/interfaces/fan';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | null = null;
  user: IUser | null = this.authService.user;
  detailedUser: IArtist | IFan | null = null;
  eventId!: string;
  isOwner: boolean | null = null;
  errorFetchingData = false;
  hasAttended = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private eventsService: EventsService,
    private userService: ArtistsService
  ) {}

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.params['id'];

    if (this.user?.alias) {
      this.userService.getOneArtist(this.user._id).subscribe({
        next: (value) => {
          this.detailedUser = value;
          console.log(this.detailedUser);
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.error(err);
        },
      });
    } else {
      this.userService.getOneFan(this.user?._id as string).subscribe({
        next: (value) => {
          this.detailedUser = value;
          console.log(this.detailedUser);
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.error(err);
        },
      });
    }

    this.eventsService.getOne(this.eventId).subscribe({
      next: (value) => {
        this.event = value;
        this.isOwner = this.authService.isOwner(this.event?._ownerId as string);
        this.hasAttended = this.detailedUser?.eventsAttended?.includes(
          this.eventId
        ) as boolean;

        console.log('attend:' + this.hasAttended);
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
        next: (res) => {
          this.hasAttended = true;
        },
        error: (err) => console.log(err),
      });
  }

  onEdit(): void {
    this.router.navigate([`/events/${this.eventId}/edit`]);
  }

  onDelete(): void {
    this.eventsService.delete(this.eventId).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.router.navigate(['/events']);
  }

  onBack(): void {
    this.router.navigate(['/events']);
  }
}
