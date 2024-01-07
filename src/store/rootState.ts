import { CitiesState } from "../types/ICity";
import { DailyForecastDetailsState } from "../types/IDailyForecast";
import { LocationDetailsState } from "../types/ICurrentWeather";
export interface RootState {
  cities: CitiesState;
  locationDetails: LocationDetailsState;
  dailyForecastDetails: DailyForecastDetailsState;
}
