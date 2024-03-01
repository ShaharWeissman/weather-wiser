import "./Favorites.css";
import FavoriteCard from "./FavoriteCard";
import { useAppSelector } from "../../store/store";
import { Box, Typography } from "@mui/material";

function Favorites(): JSX.Element {
  const favorites = useAppSelector((state) => state.cities.favorites);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "var(--cont-col)",
        bgcolor: "#f8f8f0",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        margin: "auto",
        width: "fit-content",
        boxSizing: "border-box",
        "@media (max-width:600px)": {
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          margin: "10px",
        },
      }}>
      {favorites.length ? (
        favorites.map((item, index) => <FavoriteCard key={index} city={item} />)
      ) : (
        <Typography variant="h5">No Favorites</Typography>
      )}
    </Box>
  );
}

export default Favorites;
