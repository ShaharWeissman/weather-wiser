import SearchField from "./search-field/SearchField";
import Location from "./location/Location";
import "./WeatherDetails.css";
function WeatherDetails(): JSX.Element {
  return (
    <div className="WeatherDetails">
      <SearchField />
      <Location />ss
    </div>
  );
}

export default WeatherDetails;
