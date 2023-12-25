import { API_KEY } from "../components/config/consts";
console.log("🚀 ~ file: index.ts:2 ~ API_KEY:", API_KEY);

const apiUrl = "http://dataservice.accuweather.com";

export async function cityLookup(cityStr: string) {
  const response = await fetch(
    `${apiUrl}/locations/v1/cities/autocomplete?q=${cityStr}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function getCurrentWeather(locationKey: string) {
  const response = await fetch(
    `${apiUrl}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function getDailyForecast(locationKey: string, isMetric: boolean) {
  const response = await fetch(
    `${apiUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${isMetric}`
  );
  const data = await response.json();
  return data;
}
