import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Weather } from './models/Weather';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  latitude = -26.3811;
  longitude = 27.8376;
  weatherDetails: Weather | undefined;
  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {};
  constructor(private http: HttpClient) {
    this.getWeatherDetails();
  }
  title = 'WeatherApp';
  lineChartOptions = {
    responsive: true,
  };

  getWeatherDetails() {
    this.http
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true&hourly=temperature_2m`
      )
      .subscribe((details: any) => {
        this.weatherDetails = details;
        this.chartData = [{ data: details.hourly.temperature_2m }];
        this.chartLabels = details.hourly.time;
      });
  }
}
