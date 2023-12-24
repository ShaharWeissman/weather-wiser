import { useAppSelector } from "../../../../store/store";
import "./ForecastCard.css";

type Props = {
  day: string;
  temperature: number;
};

function ForecastCard({ day, temperature }: Props): JSX.Element {
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  return (
    <div className="forecast-card">
      <div className="background-image"></div>
      <div className="card-content">
        <h5 className="weather-day">{day}</h5>
        <h6 className="weather-temperature">
          {temperature} &nbsp;{isMetric ? "C" : "F"}°
        </h6>
      </div>
    </div>
  );
}

export default ForecastCard;
