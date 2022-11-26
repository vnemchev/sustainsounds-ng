import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { EventListComponent } from './events/event-list/event-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', title: 'Welcome', component: HomeComponent },
  { path: '404', title: 'Not Found', component: NotFoundComponent },
  { path: 'events', title: 'Events', component: EventListComponent },
  { path: 'artists', title: 'Artists', component: ArtistListComponent },

  //   { path: '**', redirectTo: '/404' },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
