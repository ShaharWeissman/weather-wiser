import { Box, Typography, useTheme } from "@mui/material";
import { useAppSelector } from "../../../../store/store";

type ForecastProps = {
  day: string;
  temperature: number;
  forecastIcon: string;
};

function ForecastCard({
  day,
  temperature,
  forecastIcon,
}: ForecastProps): JSX.Element {
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        height: "auto",
        borderRadius: "16px",
        boxShadow: "0 2px 4px #507dac91",
        margin: "10px",
        minWidth: "150px",
        // height: "130px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation: "fadeIn 0.5s ease-out",
        "&:hover": {
          cursor: "pointer",
        },
      }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
        }}>
        <Typography
          variant="h6"
          sx={{ margin: "10px", fontSize: "1.2rem", fontWeight: "bold" }}>
          {day}
        </Typography>
        <img
          src={forecastIcon}
          alt="weather-icon"
          style={{ width: "auto", height: "50px" }}
        />
        <Typography variant="h6" sx={{ margin: "10px", fontSize: "1.25rem" }}>
          {temperature} &nbsp;{isMetric ? "C" : "F"}°
        </Typography>
      </Box>
    </Box>
  );
}

export default ForecastCard;
