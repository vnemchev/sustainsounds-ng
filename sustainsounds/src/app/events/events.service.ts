import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEvent } from '../interfaces/event';

const url = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private httpClient: HttpClient) {}

  getOne() {
    return this.httpClient.get<IEvent>(`${url}/events/:id`); // check if makes sense
  }

  getAll() {
    return this.httpClient.get<IEvent[]>(`${url}/events`);
  }
}
