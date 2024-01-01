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
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        <SearchField />
      </Grid>
      <Grid item xs={12}>
        <Location />
      </Grid>
    </Grid>
  );
}

export default WeatherDetails;
