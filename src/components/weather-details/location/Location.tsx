import WeatherForecast from "./5-days-forecast/WeatherForecast";
import CurrentWeather from "./current-weather/CurrentWeather";
import "./Location.css";

function Location(): JSX.Element {
  return (
    <div className="weather-container">
      <CurrentWeather />
      <WeatherForecast />
    </div>
  );
}
export default Location;
