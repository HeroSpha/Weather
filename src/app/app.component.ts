import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Weather } from './models/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  latitude = 0;
  longitude = 0;
  weatherDetails: Weather | undefined;
  constructor(private http: HttpClient) {
    this.getWeatherDetails();
  }
  title = 'WeatherApp';

  getWeatherDetails() {
    this.http
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true`
      )
      .subscribe((details: any) => {
        this.weatherDetails = details;
      });
  }
}
