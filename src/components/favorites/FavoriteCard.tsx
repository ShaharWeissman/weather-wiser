import { useEffect, useState } from "react";
import "./FavoriteCard.css";
import { City } from "../../types/ICity";
import { LocationDetails } from "../../types/ICurrentWeather";
import { useAppDispatch, useAppSelector } from "../../store/store";
import HttpService from "../../http";
import { setSelectedCity } from "../../store/slices/citySlice";
import { useNavigate } from "react-router-dom";
import { weatherIconUrl } from "../../utils/IconImageLink";
import { Box, Typography } from "@mui/material";

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
    <Box
      sx={{
        borderRadius: "12px",
        backgroundColor: "#fff",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        minWidth: "200px",
        height: "auto",
        marginBottom: "10px",
        marginLeft: "20px",
        bgcolor: "#f8f8f0",
        maxWidth: "100%",
        textAlign: "center",
        animation: "fadeIn 0.8s ease-in",
        cursor: "pointer",
      }}
      onClick={cardClickHandler}>
      <Box sx={{ padding: "10px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {city.LocalizedName}
        </Typography>
        <img src={weatherIcon} alt="Weather Icon" />
        <Typography variant="h6" sx={{ margin: "5px 0" }}>
          {
            locationDetails?.Temperature?.[isMetric ? "Metric" : "Imperial"]
              ?.Value
          }
          &nbsp;{isMetric ? "C" : "F"}°
        </Typography>
        <Typography variant="body1" sx={{ margin: "5px 0" }}>
          {locationDetails?.WeatherText}
        </Typography>
      </Box>
    </Box>
  );
}

export default FavoriteCard;
