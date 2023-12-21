import "./CurrentWeather.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloudIcon from "@mui/icons-material/Cloud"; //delete later!

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
          <button>
            <FavoriteBorderIcon />
            add to favorite
          </button>
        </div>
      </div>
      <div className="description">
        <h2>Clear sky - Warm and </h2>
      </div>
    </div>
  );
}
export default CurrentWeather;
