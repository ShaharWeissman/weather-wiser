import { Card, Typography } from '@mui/material';
import './WeatherForecast.css'; // Make sure the path is correct
import { WeatherDay, mockData } from '../../../../services/ApiService';

function WeatherForecast(): JSX.Element {
  return (
    <div className="weather-forecast">
      {mockData.map((weather: WeatherDay, index: number) => (
        <Card key={index} className="weather-card">
          <Typography variant="h5" component="div" className="weather-day">
            {weather.day}
          </Typography>
          <Typography variant="h6" className="weather-temperature">
            {weather.temperature}
          </Typography>
        </Card>
      ))}
    </div>
  );
}

export default WeatherForecast;
