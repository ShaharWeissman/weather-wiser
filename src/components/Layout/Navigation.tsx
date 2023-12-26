import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/weather.logo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Navigation.css";
import TemperatureToggle from "../TempatureToggle";
import DarkModeToggle from "../DarkModeToggle";

function Navigation(): JSX.Element {
  return (
    <header className="navbar">
      <div className="header">Abra Weather Task</div>
      <img src={Logo} alt="Weather logo" className="weather-Logo" />
      <TemperatureToggle />
      <div className="Navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}>
          <button>
            <HomeIcon>Home</HomeIcon>Home
          </button>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "active-link" : "")}>
          <button>
            <FavoriteIcon />
            Favorites
          </button>
        </NavLink>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Navigation;
