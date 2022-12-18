import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IArtist } from 'src/app/shared/interfaces/artist';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css'],
})
export class ArtistListComponent implements OnInit {
  artistList: IArtist[] | null = null;
  errorFetchingData = false;

  constructor(private artistService: ArtistsService, private router: Router) {}

  ngOnInit(): void {
    this.artistService.getAllArtists().subscribe({
      next: (value) => {
        this.artistList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      },
    });
  }

  onArtistDetails(id: string): void {
    this.router.navigate([`/artists/${id}`]);
  }
}
