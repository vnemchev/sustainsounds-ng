import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArtistsService } from 'src/app/artists/artists.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IArtist } from 'src/app/shared/interfaces/artist';
import { IUser } from 'src/app/shared/interfaces/configs';
import { IEvent } from 'src/app/shared/interfaces/event';
import { IFan } from 'src/app/shared/interfaces/fan';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: ArtistsService
  ) {}

  user: IUser | null = this.authService.user;
  isArtist: boolean = this.user?.alias !== undefined;

  detailedFan: IFan | null = null;
  detailedArtist: IArtist | null = null;
  eventsAttended: IEvent[] = [];
  eventsCreated: IEvent[] = [];

  ngOnInit(): void {
    if (this.isArtist) {
      this.userService
        .getOneArtistDetailed(this.user?._id as string)
        .subscribe({
          next: (value) => {
            console.log(value);
            this.detailedArtist = value;
            this.eventsCreated = value.eventsCreated as any as IEvent[];
            this.eventsAttended = value.eventsAttended as any as IEvent[];
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.userService.getOneFanDetailed(this.user?._id as string).subscribe({
        next: (value) => {
          this.detailedFan = value;
          this.eventsAttended = value.eventsAttended as any as IEvent[];
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onEdit(): void {
    this.router.navigate([`/profile/edit/${this.detailedArtist?._id}`]);
  }

  onDetails(id: string): void {
    this.router.navigate([`/events/${id}`]);
  }
}
