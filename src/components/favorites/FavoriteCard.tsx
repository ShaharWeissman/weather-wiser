import React from "react";
import "./FavoriteCard.css";
import { FavoritesData } from "../../services/ApiService";
import CardImage from "../../assets/images/card-image.jpg";

function FavoriteCard({
  city,
  temperature,
  description,
}: FavoritesData): JSX.Element {
  
  return (
    <div className="favorite-card">
      <div
        className="favorite-background-image"
        style={{ backgroundImage: `url(${CardImage})` }}></div>
      <div className="favorite-card-content">
        <h5 className="favorite-weather-day">{city}</h5>
        <h6 className="favorite-weather-temperature">{temperature}</h6>
        <p className="favorite-weather-description">{description}</p>
      </div>
    </div>
  );
}

export default FavoriteCard;
