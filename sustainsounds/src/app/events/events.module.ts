import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateComponent } from './create/create.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsService } from './events.service';

@NgModule({
  declarations: [EventListComponent, EventDetailsComponent, CreateComponent],
  providers: [EventsService, HttpClient],
  imports: [
    EventsRoutingModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  exports: [EventListComponent, CreateComponent],
})
export class EventsModule {}
