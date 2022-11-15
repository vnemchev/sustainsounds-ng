import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventsService } from './events.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [EventListComponent],
  providers: [EventsService, HttpClient],
  imports: [CommonModule],
  exports: [EventListComponent],
})
export class EventsModule {}
