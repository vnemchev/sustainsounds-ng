import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArtistsService } from './artists.service';

@NgModule({
  declarations: [ArtistListComponent],
  providers: [ArtistsService, HttpClient],
  imports: [CommonModule, RouterModule],
  exports: [ArtistListComponent],
})
export class ArtistsModule {}
