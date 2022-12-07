import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtist } from 'src/app/shared/interfaces/artist';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent implements OnInit {
  artistId!: string;
  artist: IArtist | null = null;
  errorFetchingData = false;

  constructor(
    private artistsService: ArtistsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.artistId = this.activatedRoute.snapshot.params['id'];

    this.artistsService.getOne(this.artistId).subscribe({
      next: (value) => {
        this.artist = value;
        console.log(this.artist);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }
}
