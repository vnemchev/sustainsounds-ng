import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}
