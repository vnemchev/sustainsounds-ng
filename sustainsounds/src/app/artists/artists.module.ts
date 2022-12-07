import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistsService } from './artists.service';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [ArtistListComponent, ArtistDetailsComponent],
  providers: [ArtistsService, HttpClient],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    ArtistsRoutingModule,
  ],
  exports: [ArtistListComponent],
})
export class ArtistsModule {}
