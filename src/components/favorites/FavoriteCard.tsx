import { useEffect, useState } from "react";
import "./FavoriteCard.css";
import CardImage from "../../assets/images/card-image.jpg";
import { City, LocationDetails } from "../../types";
import { useAppSelector } from "../../store/store";
import { getCurrentWeather } from "../../tests/mocks/api/service";

type Props = { city: City };

function FavoriteCard({ city }: Props): JSX.Element {
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const [locationDetails, setLocationDetails] = useState<LocationDetails>();

  useEffect(() => {
    async function getLocationDetails() {
      const locationDetails = await getCurrentWeather(city.Key);
      setLocationDetails(locationDetails);
    }
    getLocationDetails();
  }, []);

  return (
    <div className="favorite-card">
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
        </h6>
        <p className="favorite-weather-description">
          {locationDetails?.WeatherText}
        </p>
      </div>
    </div>
  );
}

export default FavoriteCard;
