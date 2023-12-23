import "./WeatherForecast.css"; // Make sure the path is correct
import ForecastCard from "./ForecastCard";

type WeatherDay = { day: string; temperature: string };

function WeatherForecast(): JSX.Element {
  const mockData: WeatherDay[] = [
    { day: "Mon", temperature: "22" },
    { day: "Tue", temperature: "23" },
    { day: "Wed", temperature: "24" },
    { day: "Thu", temperature: "25" },
    { day: "Fri", temperature: "26" },
  ];

  return (
    <div className="weather-forecast">
      {mockData.map((weather: WeatherDay, index: number) => (
        <ForecastCard
          key={index}
          day={weather.day}
          temperature={weather.temperature}
        />
      ))}
    </div>
  );
}

export default WeatherForecast;
