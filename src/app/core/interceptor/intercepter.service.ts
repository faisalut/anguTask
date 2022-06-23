import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  host:string ='';

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(httpRequest.url.length);
    if(httpRequest.url.length >80)
    {
      this.host = 'world-cities-and-countries.p.rapidapi.com';
    }
    else{
      this.host = 'yahoo-weather5.p.rapidapi.com';
    }
    httpRequest = httpRequest.clone({
      setHeaders: {
        Accept: 'application/json',
        'X-RapidAPI-Key':'35663630c6msh0548daab966da11p1de95ajsn8241f646ced4',
        'X-RapidAPI-Host' :this.host
      }
    });

    return next.handle(httpRequest)
      .pipe();
  }
}
