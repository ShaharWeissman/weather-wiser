import SearchField from "./search-field/SearchField";
import Location from "./location/Location";
import "./WeatherDetails.css";
import { Grid } from "@mui/material";
function WeatherDetails(): JSX.Element {
  return (
    <Grid
      container
      spacing={2}
      className="WeatherDetails"
      direction="column"
      alignItems="center">
      <Grid item xs={12} sm={6} md={8} lg={10}>
        <SearchField />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={10}>
        <Location />
      </Grid>
    </Grid>
  );
}

export default WeatherDetails;
