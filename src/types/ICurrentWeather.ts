export interface LocationDetailsState {
  locationDetails: LocationDetails | null;
  loading: boolean;
  error: string | null;
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
