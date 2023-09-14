export interface WeatherState {
  weather: null | IWeather;
  forcast: null | IForcast;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
}

export interface IForcast {
  city: City;
  cnt: number;
  cod: string;
  list: List[];
  message: number;
}

export interface IWeather {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

type Clouds = {
  all: number;
};

type Coord = {
  lat: number;
  lon: number;
};

type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf?: number;
  temp_max: number;
  temp_min: number;
};

type Sys = {
  country?: string;
  id?: number;
  sunrise?: number;
  sunset?: number;
  type?: number;
  pod?: string;
};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type Wind = {
  deg: number;
  gust: number;
  speed: number;
};

type City = {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

export interface List extends IWeather {}
