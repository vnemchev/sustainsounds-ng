import { Injectable, Provider } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { IUser } from './shared/interfaces/configs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    const token: string | undefined = this.authService.getToken();

    if (token)
      request = request.clone({
        setHeaders: { 'X-Authorization': token },
      });

    // throw new Error('Method not implemented.');
    return next.handle(request);
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
