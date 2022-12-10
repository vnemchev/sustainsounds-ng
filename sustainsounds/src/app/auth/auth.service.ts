import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IArtist } from '../shared/interfaces/artist';
import { IFan } from '../shared/interfaces/fan';

const url = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(data: object) {
    return this.httpClient
      .post<IArtist | IFan>(`${url}/auth/login`, JSON.stringify(data))
      .subscribe({
        next: (value) => {
          console.log(value);
          this.setSession(value);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  register(data: object) {
    return this.httpClient
      .post<IArtist | IFan>(`${url}/auth/register`, JSON.stringify(data))
      .subscribe({
        next: (value) => {
          console.log(value);
          this.setSession(value);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  logout() {
    return this.httpClient.get(`${url}/auth/logout`).subscribe({
      next: (value) => {
        console.log(value);
        this.clearSession();
      },
      error: (err) => console.log(err),
    });
  }

  private setSession(authResponse: any): void {
    localStorage.setItem('accessToken', authResponse.accessToken);
  }

  private clearSession(): void {
    localStorage.removeItem('accessToken');
  }
}
