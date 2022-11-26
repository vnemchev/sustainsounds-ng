import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateComponent } from './create/create.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsService } from './events.service';

@NgModule({
  declarations: [EventListComponent, EventDetailsComponent, CreateComponent],
  providers: [EventsService, HttpClient],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    EventsRoutingModule,
  ],
  exports: [EventListComponent, CreateComponent],
})
export class EventsModule {}
