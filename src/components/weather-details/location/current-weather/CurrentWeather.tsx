
import "./CurrentWeather.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloudIcon from "@mui/icons-material/Cloud"; //delete later!
import { Button } from "@mui/material";

function CurrentWeather(): JSX.Element {
    return (
      <div>
      <div className="current-weather">
        <div className="current-data">
        <CloudIcon color="primary" />
          <p>Tel Aviv</p>
          <p>38 C°</p>
        </div>
        <div className="favorites">
          <FavoriteBorderIcon />
          <Button>add to favorite</Button>
        </div>
      </div>
      <div className="description">
        <h4>Clear sky - Warm and </h4>
      </div>
      </div>
    );
  }
export default CurrentWeather;
