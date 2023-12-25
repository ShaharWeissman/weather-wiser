import { API_KEY } from "../components/config/consts";
import { City, ForecastResponse, LocationDetails } from "../types";
console.log("🚀 ~ file: index.ts:2 ~ API_KEY:", API_KEY);

const apiUrl = "http://dataservice.accuweather.com";

export async function cityLookup(cityStr: string): Promise<City[]> {
  const response = await fetch(
    `${apiUrl}/locations/v1/cities/autocomplete?q=${cityStr}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function getCurrentWeather(
  locationKey: string
): Promise<LocationDetails[]> {
  const response = await fetch(
    `${apiUrl}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function getDailyForecast(
  locationKey: string,
  isMetric: boolean
): Promise<ForecastResponse> {
  const response = await fetch(
    `${apiUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${isMetric}`
  );
  const data = await response.json();
  return data;
}

export async function getGeoLocation(lat: number, lon: number): Promise<City> {
  const response = await fetch(
    `${apiUrl}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${lon}&toplevel=true`
  );
  const data = await response.json();
  return data;
}
