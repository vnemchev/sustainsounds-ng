import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventDetailsComponent,
    EventCreateComponent,
    EventEditComponent,
  ],
  imports: [
    EventsRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  exports: [EventListComponent, EventCreateComponent, EventEditComponent],
})
export class EventsModule {}
