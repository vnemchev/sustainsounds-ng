import { Component, OnInit } from '@angular/core';
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

  constructor(private artistService: ArtistsService) {}

  ngOnInit(): void {
    this.artistService.getAll().subscribe({
      next: (value) => {
        this.artistList = value;
        console.log(this.artistList);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }
}
