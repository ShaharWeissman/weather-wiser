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
import { Box, Button, Typography, useTheme } from "@mui/material";

function CurrentWeather(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.cities.selectedCity);
  const cities = useAppSelector((state) => state.cities.cities);
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const favorites = useAppSelector((state) => state.cities.favorites);
  const locationDetails = useAppSelector(
    (state) => state.locationDetails.locationDetails
  );
  const dispatch = useAppDispatch();
  const theme = useTheme();

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
        bgcolor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        flexWrap: "wrap",
        padding: "30px",
        border: "1px solid rgba(101, 101, 101, 0.1)",
        borderRadius: "12px",
        boxShadow: "0 2px 4px #507dac91",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: { xs: "flex-start", sm: "space-between" },
        width: "100%",
        boxSizing: "border-box",
      }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h5"
          sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          Current Weather
        </Typography>
        <Typography>{selectedCity?.LocalizedName}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <img src={currentWeatherIcon} alt="icon" />
          <Typography
            variant="h2"
            sx={{
              fontSize: "4rem",
              ml: "30%",
            }}>
            {
              locationDetails?.Temperature?.[isMetric ? "Metric" : "Imperial"]
                ?.Value
            }
            &nbsp;{isMetric ? "C" : "F"}°
          </Typography>
          <Typography variant="h6" sx={{ display: { xs: "block" } }}>
            {locationDetails?.WeatherText}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginLeft: "auto" }}>
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
    </Box>
  );
}
export default CurrentWeather;
