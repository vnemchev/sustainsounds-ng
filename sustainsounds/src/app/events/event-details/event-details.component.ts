import { Component, Input } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent {
  @Input() event?: IEvent;
  @Input() show?: boolean;

  constructor() {}

  close() {
    this.show = false;
    console.log(this.show);
  }
}
