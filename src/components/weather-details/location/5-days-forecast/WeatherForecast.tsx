import "./WeatherForecast.css";
import ForecastCard from "./ForecastCard";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useEffect } from "react";
import { fetchDailyForecastDetails } from "../../../../store/slices/dailyForecastDetailsSlice";
import { Grid } from "@mui/material";
import { weatherIconUrl } from "../../../../utils/IconImageLink";

function WeatherForecast(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.cities.selectedCity);
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const dailyForecastDetails = useAppSelector(
    (state) => state.dailyForecastDetails.dailyForecastDetails
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedCity?.Key) {
      dispatch(
        fetchDailyForecastDetails({ locationKey: selectedCity?.Key, isMetric })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity, isMetric]);
  return (
    <Grid container className="weather-forecast" spacing={2}>
      <Grid item xs={12}>
        <div className="forecast-header">Daily Forecast</div>
      </Grid>
      {dailyForecastDetails?.map((weather, index) => (
        <Grid item xs={6} sm={6} md={4} lg={2.4} key={index}>
          <ForecastCard
            day={new Date(weather?.Date + "").toLocaleDateString("en-US", {
              weekday: "short",
            })}
            temperature={weather.Temperature.Maximum.Value}
            forecastIcon={weatherIconUrl(weather.Day.Icon)}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default WeatherForecast;
