import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IArtist } from '../shared/interfaces/artist';

const url = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private httpClient: HttpClient) {}

  getOne(id: string) {
    return this.httpClient.get<IArtist>(`${url}/users/artists/${id}`);
  }

  getAll() {
    return this.httpClient.get<IArtist[]>(`${url}/users/artists`);
  }
}
