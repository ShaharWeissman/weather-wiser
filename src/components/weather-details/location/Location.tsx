import { Grid, useTheme } from "@mui/material";
import WeatherForecast from "./5-days-forecast/WeatherForecast";
import CurrentWeather from "./current-weather/CurrentWeather";

function Location(): JSX.Element {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        width: "fit-content",
        marginTop: "20px",
        boxSizing: "border-box",
        bgcolor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      }}>
      <Grid item xs={12} sm={6} md={8} lg={10}>
        <CurrentWeather />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={10}>
        <WeatherForecast />
      </Grid>
    </Grid>
  );
}
export default Location;
