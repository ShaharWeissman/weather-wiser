import './WeatherForecast.css'; // Make sure the path is correct
import { WeatherDay, mockData } from '../../../../services/ApiService';
import ForecastCard from './ForecastCard';

function WeatherForecast(): JSX.Element {
  return (
    <div className="weather-forecast">
{mockData.map((weather: WeatherDay, index:number) => (
  <ForecastCard key={index} day={weather.day} temperature={weather.temperature}/>
))}
    </div>
  );
}

export default WeatherForecast;
