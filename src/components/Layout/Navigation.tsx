import Logo from "../../assets/images/weather.logo.jpg";
import "./Navigation.css";


function Navigation(): JSX.Element {
  return (
    <header className="Header">
    <h2>Weather Task</h2>
    <img src={Logo} alt="Weather logo" className="weather-Logo" />
    <div className="Navigation">
      <button>Home</button>
      <button>Favorites</button>
    </div>
  </header>

    );
}

export default Navigation;
