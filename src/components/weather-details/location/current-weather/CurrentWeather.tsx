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
import { Box, Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f8f8f0",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "10px",
        width: "100%",
      }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h5"
          sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          Current Weather
        </Typography>
        <Typography>{selectedCity?.LocalizedName}</Typography>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <img src={currentWeatherIcon} alt="icon" className="icon-weather" />
          <Typography
            variant="h2"
            sx={{ color: "var(--font-color)", fontSize: "4rem", ml: "10%" }}>
            {
              locationDetails?.Temperature?.[isMetric ? "Metric" : "Imperial"]
                ?.Value
            }
            &nbsp;{isMetric ? "C" : "F"}°
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button
          onClick={toggleFavoriteHandler}
          className={isFavorite ? "favorite-active" : ""}
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            marginLeft: "10px",
            padding: "5px 10px",
            backgroundColor: "#74a7de",
            color: "var(--font-color)",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#507dac",
            },
            ...(isFavorite && {
              backgroundColor: "#db8787",
              color: "#411007",
            }),
          }}>
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
        </Button>
      </Box>
      <Typography
        sx={{
          position: "relative",
          paddingBottom: "20px",
          fontWeight: "lighter",
          color: "var(--font-color)",
          fontSize: "1.5rem",
          "&::after": {
            content: "''",
            display: "block",
            width: "100%",
            height: "2px",
            background: "#507dac",
            boxShadow: "0px 1.7px 2px rgba(0, 0, 0, 0.2)",
            position: "absolute",
            bottom: "0",
            left: "0",
            opacity: "0.5",
          },
        }}>
        {locationDetails?.WeatherText}
      </Typography>
    </Box>
  );
}
export default CurrentWeather;
