import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventListComponent,
  },
  {
    path: 'events/create',
    title: 'Create Event',
    component: EventCreateComponent,
  },
  {
    path: 'events/:id',
    title: 'More Info',
    component: EventDetailsComponent,
  },
  {
    path: 'events/:id/edit',
    title: 'Edit Event',
    component: EventEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
