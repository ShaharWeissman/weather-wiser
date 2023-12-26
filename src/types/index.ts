export interface City {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

export interface CitiesState {
  cities: City[];
  selectedCity: City | null;
  loading: boolean;
  error: string | null;
  isMetric: boolean;
  favorites: City[];
  isDarkTheme: boolean;
}

export interface LocationDetailsState {
  locationDetails: LocationDetails | null;
  loading: boolean;
  error: string | null;
  //addToFavorite: locationDetails| null
}

export interface LocationDetails {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: null | string;
  IsDayTime: boolean;
  Temperature: {
    Metric: WeatherTemperature;
    Imperial: WeatherTemperature;
  };
  MobileLink: string;
  Link: string;
}
//for the weather units
export interface WeatherTemperature {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface ForecastTemperatureDetail {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface ForecastDayDetail {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType?: string;
  PrecipitationIntensity?: string;
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: ForecastTemperatureDetail;
    Maximum: ForecastTemperatureDetail;
  };
  Day: ForecastDayDetail;
  Night: ForecastDayDetail;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface FiveDayForecastData {
  DailyForecasts: DailyForecast[];
}

// State interface
export interface DailyForecastDetailsState {
  dailyForecastDetails: DailyForecast[] | null;
  loading: boolean;
  error: string | null;
}

export interface ForecastResponse {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

export interface Headline {
  EffectiveDate: Date;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: Date;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}
