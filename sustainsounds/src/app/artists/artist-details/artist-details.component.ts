import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IArtist } from 'src/app/shared/interfaces/artist';
import { IEvent } from 'src/app/shared/interfaces/event';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent implements OnInit {
  artistId!: string;
  artist: IArtist | null = null;
  eventsCreated: IEvent[] = [];
  errorFetchingData = false;

  constructor(
    private artistsService: ArtistsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.artistId = this.activatedRoute.snapshot.params['id'];

    this.artistsService.getOneArtistDetailed(this.artistId).subscribe({
      next: (value) => {
        this.artist = value;
        this.eventsCreated = value.eventsCreated as any as IEvent[];
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/artists']);
  }

  onNavigate(id: string): void {
    this.router.navigate([`/events/${id}`]);
  }
}
