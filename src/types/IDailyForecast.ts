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
