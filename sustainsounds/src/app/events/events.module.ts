import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { EventListComponent } from './event-list/event-list.component';
import { EventsService } from './events.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [EventListComponent],
  providers: [EventsService, HttpClient],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [EventListComponent],
})
export class EventsModule {}
