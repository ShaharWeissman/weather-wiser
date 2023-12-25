import "./CurrentWeather.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import {
  fetchCitiesData,
  fetchGeoCoordinates,
  setSelectedCity,
  toggleFavorite,
} from "../../../../store/slices/citySlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useEffect } from "react";
import { fetchLocationDetails } from "../../../../store/slices/locationDetailsSlice";
import { DEFAULT_CITY_SEARCH_TEXT } from "../../../config/consts";

function formatIconNumber(number: number): string {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

function CurrentWeather(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.cities.selectedCity);
  const cities = useAppSelector((state) => state.cities.cities);
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const favorites = useAppSelector((state) => state.cities.favorites);

  const isFavorite = favorites
    .map((city) => city.Key)
    .includes(selectedCity?.Key as string)
    ? "favorite-active"
    : "";

  const locationDetails = useAppSelector(
    (state) => state.locationDetails.locationDetails
  );
  const dispatch = useAppDispatch();

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

  const weatherIconUrl = `https://developer.accuweather.com/sites/default/files/${formatIconNumber(
    locationDetails?.WeatherIcon as number
  )}-s.png`;

  return (
    <div>
      <div className="current-weather">
        <div className="current-data">
          <div className="weather-header">Current Weather</div>

          <p>{selectedCity?.LocalizedName}</p>
          <div className="weather-icon-temp">
            <img src={weatherIconUrl} alt="icon" className="icon-weather" />
            <p>
              {
                locationDetails?.Temperature?.[isMetric ? "Metric" : "Imperial"]
                  ?.Value
              }
              &nbsp;{isMetric ? "C" : "F"}°
            </p>
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
      <div className="description">
        <h2>{locationDetails?.WeatherText}</h2>
      </div>
    </div>
  );
}
export default CurrentWeather;
