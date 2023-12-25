import { useEffect, useState } from "react";
import "./FavoriteCard.css";
import CardImage from "../../assets/images/card-image.jpg";
import { City, LocationDetails } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getCurrentWeather } from "../../http";
import { setSelectedCity } from "../../store/slices/citySlice";
import { useNavigate } from "react-router-dom";

type Props = { city: City };

function FavoriteCard({ city }: Props): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const [locationDetails, setLocationDetails] = useState<LocationDetails>();

  useEffect(() => {
    async function getLocationDetails() {
      const locationDetails = await getCurrentWeather(city.Key);
      setLocationDetails(locationDetails[0]);
    }
    getLocationDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardClickHandler = () => {
    dispatch(setSelectedCity(city));
    navigate("/");
  };

  return (
    <div className="favorite-card" onClick={cardClickHandler}>
      <div
        className="favorite-background-image"
        style={{ backgroundImage: `url(${CardImage})` }}></div>
      <div className="favorite-card-content">
        <h5 className="favorite-weather-day">{city.LocalizedName}</h5>
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
