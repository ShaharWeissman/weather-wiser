import "./WeatherForecast.css";
import ForecastCard from "./ForecastCard";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useEffect } from "react";
import { fetchDailyForecastDetails } from "../../../../store/slices/dailyForecastDetailsSlice";

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
  }, [selectedCity]);

  return (
    <div className="weather-forecast">
      <div className="forecast-header">Daily Forecast</div>
      <div className="weather-cards">
        {dailyForecastDetails?.[0]?.Date &&
          dailyForecastDetails?.map((weather, index: number) => (
            <ForecastCard
              key={index}
              day={new Date(weather?.Date + "").toLocaleDateString("en-US", {
                weekday: "short",
              })}
              temperature={weather.Temperature.Maximum.Value}
            />
          ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
