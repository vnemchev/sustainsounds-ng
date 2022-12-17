import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistListComponent,
  },
  {
    path: 'artists/:id',
    component: ArtistDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}
