import { useEffect, useState } from "react";
import "./FavoriteCard.css";
import { City } from "../../types/ICity";
import { LocationDetails } from "../../types/ICurrentWeather";
import { useAppDispatch, useAppSelector } from "../../store/store";
import HttpService from "../../http";
import { setSelectedCity } from "../../store/slices/citySlice";
import { useNavigate } from "react-router-dom";
import { weatherIconUrl } from "../../utils/IconImageLink";

type cityProps = { city: City };

function FavoriteCard({ city }: cityProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const [locationDetails, setLocationDetails] = useState<LocationDetails>();
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    async function getLocationDetails() {
      const locationDetails = await HttpService.getCurrentWeather(city.Key);
      setLocationDetails(locationDetails[0]);
      setWeatherIcon(weatherIconUrl(locationDetails[0].WeatherIcon));
    }
    getLocationDetails();
  }, [city.Key]);

  const cardClickHandler = () => {
    dispatch(setSelectedCity(city));
    navigate("/");
  };

  return (
    <div className="favorite-card" onClick={cardClickHandler}>
      <div className="favorite-card-content">
        <button onClick={cardClickHandler}> </button>
        <h5 className="favorite-weather-day">{city.LocalizedName}</h5>
        <img src={weatherIcon} alt="Weather Icon" />
        <h6 className="favorite-weather-temperature">
          {
            locationDetails?.Temperature?.[isMetric ? "Metric" : "Imperial"]
              ?.Value
          }
          &nbsp;{isMetric ? "C" : "F"}°
        </h6>
        <p className="favorite-weather-description">
          {locationDetails?.WeatherText}
        </p>
      </div>
    </div>
  );
}

export default FavoriteCard;
