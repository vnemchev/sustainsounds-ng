import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IArtist } from '../shared/interfaces/artist';
import { IFan } from '../shared/interfaces/fan';
import { IUser } from '../shared/interfaces/configs';

const url = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  storage: string | null = localStorage.getItem('user');
  user: IUser | null = JSON.parse(this.storage as any) as IUser;

  constructor(private httpClient: HttpClient, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.user !== null;
  }

  getToken(): string | undefined {
    return this.user?.accessToken;
  }

  login(email: string, password: string) {
    const payload = { email, password };
    return this.httpClient
      .post<IArtist | IFan>(`${url}/auth/login`, JSON.stringify(payload))
      .pipe(
        tap((res) => {
          this.setSession(res);
          this.router.navigate(['/events']);
        })
      );
  }

  register(
    email: string,
    password: string,
    repeatPassword: string,
    alias?: string | undefined
  ) {
    const payload = { email, password, repeatPassword, alias };

    return this.httpClient
      .post<IArtist | IFan | IUser>(
        `${url}/auth/register`,
        JSON.stringify(payload)
      )
      .pipe(
        tap((res) => {
          this.setSession(res);
          this.router.navigate(['/events']);
        })
      );
  }

  logout() {
    return this.httpClient.get(`${url}/auth/logout`).subscribe({
      next: (value) => {
        this.clearSession();
        this.router.navigate(['/']);
      },
      error: (err) => console.log(err),
    });
  }

  setSession(authResponse: any): void {
    localStorage.setItem('user', JSON.stringify(authResponse));
    const jsonuser: string | null = localStorage.getItem('user');
    const user = JSON.parse(jsonuser as string);
    this.user = user;
  }

  clearSession(): void {
    localStorage.removeItem('user');
    this.user = null;
  }

  isOwner(eventId: string): boolean {
    return this.user?._id === eventId;
  }
}
