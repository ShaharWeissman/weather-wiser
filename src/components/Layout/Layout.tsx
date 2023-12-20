import WeatherDetails from "../weather-details/WeatherDetails";
import "./Layout.css";
import Navigation from "./Navigation";


function Layout(): JSX.Element {
  return (
    <div className="Layout">
   <Navigation/>
   <WeatherDetails/>
   </div>
  );
}

export default Layout;
