import "./WeatherForecast.css"; // Make sure the path is correct
import ForecastCard from "./ForecastCard";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useEffect } from "react";
import { fetchDailyForecastDetails } from "../../../../store/DailyForecastDetailsSlice";

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
  }, [selectedCity]);

  return (
    <div className="weather-forecast">
      {dailyForecastDetails?.map((weather, index: number) => (
        <ForecastCard
          key={index}
          day={new Date(weather?.Date + "").toLocaleDateString("en-US", {
            weekday: "short",
          })}
          temperature={weather.Temperature.Maximum.Value}
        />
      ))}
    </div>
  );
}

export default WeatherForecast;
