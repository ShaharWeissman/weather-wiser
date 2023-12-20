import { Route, Routes } from "react-router-dom";
import WeatherDetails from "../weather-details/WeatherDetails";

function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<WeatherDetails />} />
    </Routes>
  );
}

export default Routing;
