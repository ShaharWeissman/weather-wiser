import { Route, Routes } from "react-router-dom";
import WeatherDetails from "./components/weather-details/WeatherDetails";
import Favorites from "./components/favorites/Favorites";
import Layout from "./components/layout";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppSelector } from "./store/store";

function Routing(): JSX.Element {
  const isDarkTheme = useAppSelector((state) => state.cities.isDarkTheme);

  // create a darkTheme function to handle dark theme using createTheme
  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WeatherDetails />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default Routing;
