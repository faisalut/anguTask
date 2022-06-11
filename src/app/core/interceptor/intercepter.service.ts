import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    httpRequest = httpRequest.clone({
      setHeaders: {
        Accept: 'application/json',
        'X-RapidAPI-Key':'35663630c6msh0548daab966da11p1de95ajsn8241f646ced4',
        'X-RapidAPI-Host' :'world-cities-and-countries.p.rapidapi.com'
      }
    });

    return next.handle(httpRequest)
      .pipe();
  }
}
