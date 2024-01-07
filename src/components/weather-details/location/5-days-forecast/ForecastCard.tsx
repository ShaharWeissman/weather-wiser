import { useAppSelector } from "../../../../store/store";
import "./ForecastCard.css";

type ForecastProps = {
  day: string;
  temperature: number;
  forecastIcon: string;
};

function ForecastCard({
  day,
  temperature,
  forecastIcon,
}: ForecastProps): JSX.Element {
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  return (
    <div className="forecast-card">
      <div className="background-image"></div>
      <div className="card-content">
        <h5 className="weather-day">{day}</h5>
        <img src={forecastIcon} alt="weather-icon" />
        <h6 className="weather-temperature">
          {temperature} &nbsp;{isMetric ? "C" : "F"}°
        </h6>
      </div>
    </div>
  );
}

export default ForecastCard;
