import { Route, Routes } from "react-router-dom";
import WeatherDetails from "./components/weather-details/WeatherDetails";
import Favorites from "./components/favorites/Favorites";
import Layout from "./components/Layout";

import Page404 from "./components/Layout/Page404";

function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WeatherDetails />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default Routing;
