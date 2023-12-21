import { Route, Routes } from "react-router-dom";
import WeatherDetails from "../weather-details/WeatherDetails";
import Favorites from "../favorites/Favorites";
import Layout from "./Layout";

function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WeatherDetails />} />
        <Route path="home" element={<WeatherDetails />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default Routing;
