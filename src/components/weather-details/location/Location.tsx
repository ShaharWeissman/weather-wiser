import { Grid } from "@mui/material";
import WeatherForecast from "./5-days-forecast/WeatherForecast";
import CurrentWeather from "./current-weather/CurrentWeather";
import "./Location.css";

function Location(): JSX.Element {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      className="weather-container">
      <Grid xs={12} sm={6} md={8} lg={10}>
        <CurrentWeather />
      </Grid>
      <Grid xs={12} sm={6} md={8} lg={10}>
        <WeatherForecast />
      </Grid>
    </Grid>
  );
}
export default Location;
