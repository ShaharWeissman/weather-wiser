import "./CurrentWeather.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { fetchLocationDetails } from "../../../../store/locationDetailsSlice";
import { useEffect } from "react";

function CurrentWeather(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.cities.selectedCity);
  const locationDetails = useAppSelector(
    (state) => state.locationDetails.locationDetails
  );
  const dispatch = useAppDispatch();
  const cityName = selectedCity?.LocalizedName || "Tel Aviv";
  useEffect(() => {
    const defaultKey = "215854";
    const locationKey = selectedCity?.Key ?? defaultKey;
    dispatch(fetchLocationDetails(locationKey));
  }, [selectedCity, dispatch]);
  // use effect return tlv ,

  const weatherIconUrl = locationDetails?.WeatherIcon
    ? `https://developer.accuweather.com/sites/default/files/${locationDetails.WeatherIcon}-s.png`
    : "default_icon_url_here"; // URL for a default icon

  return (
    <div>
      <div className="current-weather">
        <div className="current-data">
          <p>{cityName}</p>
          <p>{locationDetails?.LocalObservationDateTime}</p>
          <img src={weatherIconUrl} alt="icon" />
          <p>{locationDetails?.Temperature?.Metric?.Value} C°</p>
        </div>
        <div className="favorites">
          <button>
            <FavoriteBorderIcon />
            add to favorite
          </button>
        </div>
      </div>
      <div className="description">
        <h2>{locationDetails?.WeatherText}</h2>
      </div>
    </div>
  );
}
export default CurrentWeather;
