import { WeatherDay } from "../../../../tests/mocks/api/service";
import "./ForecastCard.css";

function ForecastCard({ day, temperature }: WeatherDay): JSX.Element {
  return (
    <div className="forecast-card">
      <div className="background-image"></div>
      <div className="card-content">
        <h5 className="weather-day">{day}</h5>
        <h6 className="weather-temperature">{temperature}</h6>
      </div>
    </div>
  );
}

export default ForecastCard;
