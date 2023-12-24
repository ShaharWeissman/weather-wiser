import "./CurrentWeather.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import CloudIcon from "@mui/icons-material/Cloud"; //delete later!
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useEffect } from "react";
import { fetchLocationDetails } from "../../../../store/locationDetailsSlice";

function formatIconNumber(number: number): string {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

function CurrentWeather(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.cities.selectedCity);
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const locationDetails = useAppSelector(
    (state) => state.locationDetails.locationDetails
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const defaultKey = "215854";
    const locationKey = selectedCity?.Key ?? defaultKey;
    dispatch(fetchLocationDetails(locationKey));
  }, [selectedCity, dispatch]);
  // use effect return tlv ,

  const weatherIconUrl = `https://developer.accuweather.com/sites/default/files/${formatIconNumber(
    locationDetails?.WeatherIcon as number
  )}-s.png`;

  return (
    <div>
      <div className="current-weather">
        <div className="current-data">
          <p>{selectedCity?.LocalizedName}</p>
          <img src={weatherIconUrl} alt="icon" />
          <p>
            {
              locationDetails?.Temperature?.[isMetric ? "Metric" : "Imperial"]
                ?.Value
            }
            &nbsp;{isMetric ? "C" : "F"}°
          </p>
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
