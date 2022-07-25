import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { partitionArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weatherModule';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
     getWeatherData(cityName: string): Observable<WeatherData>{

      return this.http.get<WeatherData>(environment.weatherapiBaseUrl,{
        headers: new HttpHeaders()
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
        params: new HttpParams()
        .set('q',cityName)
        .set('units','metric')
        .set('mode','json')
      })
    }
  
}
