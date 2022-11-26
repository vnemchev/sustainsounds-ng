import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArtistListComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArtistListComponent],
})
export class ArtistsModule {}
