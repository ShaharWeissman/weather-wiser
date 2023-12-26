import {
  cityLookup as mockCityLookup,
  getCurrentWeather as mockGetCurrentWeather,
  getDailyForecast as mockGetDailyForecast,
  getGeoLocation as mockGetGeoLocation,
} from "../tests/mocks/api/service";
import { API_KEY, NODE_ENV } from "../config/consts";
import { City, ForecastResponse, LocationDetails } from "../types";
const apiUrl = "https://dataservice.accuweather.com";

const HttpService = {
  cityLookup: async (cityStr: string): Promise<City[]> => {
    const response = await fetch(
      `${apiUrl}/locations/v1/cities/autocomplete?q=${cityStr}&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  },
  getCurrentWeather: async (
    locationKey: string
  ): Promise<LocationDetails[]> => {
    const response = await fetch(
      `${apiUrl}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  },
  getDailyForecast: async (
    locationKey: string,
    isMetric: boolean
  ): Promise<ForecastResponse> => {
    const response = await fetch(
      `${apiUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${isMetric}`
    );
    const data = await response.json();
    return data;
  },
  getGeoLocation: async (lat: number, lon: number): Promise<City> => {
    const response = await fetch(
      `${apiUrl}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${lon}&toplevel=true`
    );
    const data = await response.json();
    return data;
  },
};

if (NODE_ENV === "development") {
  console.log("🚀 ~ file: index.ts:48 ~ NODE_ENV:", NODE_ENV);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (HttpService as any).cityLookup = mockCityLookup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (HttpService as any).getCurrentWeather = mockGetCurrentWeather;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (HttpService as any).getDailyForecast = mockGetDailyForecast;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (HttpService as any).getGeoLocation = mockGetGeoLocation;
}
export default HttpService;
