import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../../store/store";
import "./ForecastCard.css";

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
  return (
    <Box
      sx={{
        borderRadius: "16px",
        bgcolor: "#f8f8f0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        minWidth: "150px",
        height: "130px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--card-col)",
        animation: "fadeIn 0.5s ease-out",
        "&:hover": {
          cursor: "pointer",
        },
      }}>
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "var(--font-color)",
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
