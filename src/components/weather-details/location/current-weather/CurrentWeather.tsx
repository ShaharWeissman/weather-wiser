import "./CurrentWeather.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { weatherIconUrl } from "../../../../utils/IconImageLink";
import {
  fetchCitiesData,
  fetchGeoCoordinates,
  setSelectedCity,
  toggleFavorite,
} from "../../../../store/slices/citySlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useEffect } from "react";
import { fetchLocationDetails } from "../../../../store/slices/locationDetailsSlice";
import { DEFAULT_CITY_SEARCH_TEXT } from "../../../../config/consts";

function CurrentWeather(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.cities.selectedCity);
  const cities = useAppSelector((state) => state.cities.cities);
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const favorites = useAppSelector((state) => state.cities.favorites);
  const locationDetails = useAppSelector(
    (state) => state.locationDetails.locationDetails
  );
  const dispatch = useAppDispatch();

  const isFavorite = favorites
    .map((city) => city.Key)
    .includes(selectedCity?.Key as string)
    ? "favorite-active"
    : "";

  useEffect(() => {
    dispatch(fetchCitiesData(DEFAULT_CITY_SEARCH_TEXT));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!selectedCity) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      dispatch(fetchGeoCoordinates())
        .then(() => {
          // If the geolocation fetch is successful, the response will be handled here
        })
        .catch(() => {
          // If there is an error or the user denies permission, fetch default city
          dispatch(fetchCitiesData(DEFAULT_CITY_SEARCH_TEXT));
        });
    }
  }, [dispatch, selectedCity]);

  useEffect(() => {
    if (selectedCity?.Key) {
      dispatch(fetchLocationDetails(selectedCity.Key));
    } else {
      dispatch(setSelectedCity(cities[0]));
    }
  }, [selectedCity, dispatch, cities]);

  const toggleFavoriteHandler = () => {
    if (selectedCity) {
      dispatch(toggleFavorite(selectedCity));
    }
  };

  const currentWeatherIcon = weatherIconUrl(
    locationDetails?.WeatherIcon as number
  );

  return (
    <div>
      <div className="current-weather">
        <div className="current-data">
          <div className="weather-header">Current Weather</div>

          <p>{selectedCity?.LocalizedName}</p>
          <div className="weather-icon-temp">
            <img src={currentWeatherIcon} alt="icon" className="icon-weather" />
            <div className="temp-weather">
              {
                locationDetails?.Temperature?.[isMetric ? "Metric" : "Imperial"]
                  ?.Value
              }
              &nbsp;{isMetric ? "C" : "F"}°
            </div>
          </div>
        </div>
        <div className="favorites">
          <button
            onClick={toggleFavoriteHandler}
            className={isFavorite ? "favorite-active" : ""}>
            {isFavorite ? (
              <>
                <RemoveCircleIcon />
                <span>Remove</span>
              </>
            ) : (
              <>
                <FavoriteIcon /> <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="description">{locationDetails?.WeatherText}</div>
    </div>
  );
}
export default CurrentWeather;
