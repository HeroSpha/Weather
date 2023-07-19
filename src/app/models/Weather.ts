import { CurrentWeather } from './CurrentWeather';
import { Hourly } from './Hourly';

export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: CurrentWeather;
  hourly: Hourly;
}
