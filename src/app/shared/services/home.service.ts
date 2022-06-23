import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  selectedValue = new BehaviorSubject<any>(1);
  

  ROOT_URL = environment.rootUrl;
  ROOT_URL2 = environment.rootUrl2;
  constructor(private http: HttpClient) { }

  // GET API FOR CITY SEARCH
  getCities(page:number,limit:number,code:String,search:any): Observable<any> {
    return this.http.get<any>(`${this.ROOT_URL}/locations/cities/${search}?page=${page}&limit=${limit}&countryIsoCode=${code}`);
  }

  getWeather(city:String): Observable<any> {
    return this.http.get<any>(`${this.ROOT_URL2}?location=${city}&format=json&u='f'`);
  }


  // SET VALUE TO VARIABLE
  setValue(val: any): void {
    this.selectedValue.next(val);
  }

  // GET VALUE USING OBSERVABLE
  getValue(): Observable<any> {
    return this.selectedValue;
  }

}
