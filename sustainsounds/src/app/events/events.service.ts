import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEvent } from '../shared/interfaces/event';

const url = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private httpClient: HttpClient) {}

  getOne(id: string) {
    return this.httpClient.get<IEvent>(`${url}/events/${id}`);
  }

  getAll() {
    return this.httpClient.get<IEvent[]>(`${url}/events`);
  }

  create(event: IEvent) {
    return this.httpClient.post(`${url}/events`, event);
  }
}
