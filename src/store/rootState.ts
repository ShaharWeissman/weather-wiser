import {
  CitiesState,
  DailyForecastDetailsState,
  LocationDetailsState,
} from "../types";

export interface RootState {
  cities: CitiesState;
  locationDetails: LocationDetailsState;
  dailyForecastDetails: DailyForecastDetailsState;
}
