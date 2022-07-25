import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weatherModule';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;

  constructor(private weatherService: WeatherService) {

  }
  weatherData?: WeatherData;
  cityName: string = 'Mumbai';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }
  onsubmit() { 
    this.getWeatherData(this.cityName);
    this.cityName=' '
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response)
      }
    })
  }



}
