import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IArtist } from '../shared/interfaces/artist';
import { IFan } from '../shared/interfaces/fan';

const url = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private httpClient: HttpClient) {}

  getAllArtists() {
    return this.httpClient.get<IArtist[]>(`${url}/users/artists`);
  }

  getOneArtist(id: string) {
    return this.httpClient.get<IArtist>(`${url}/users/artists/${id}`);
  }

  getOneArtistDetailed(id: string) {
    return this.httpClient.get<IArtist>(`${url}/users/artists/${id}/detailed`);
  }

  getOneFan(id: string) {
    return this.httpClient.get<IFan>(`${url}/users/fans/${id}`);
  }

  getOneFanDetailed(id: string) {
    return this.httpClient.get<IFan>(`${url}/users/fans/${id}/detailed`);
  }

  editArtist(id: string, artist: IArtist) {
    return this.httpClient.put<IArtist>(`${url}/users/artists/${id}`, artist);
  }

  attendEvent(userId: string, eventId: string) {
    return this.httpClient.get<IArtist>(`${url}/users/${userId}/${eventId}`);
  }
}
