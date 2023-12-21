import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/weather.logo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Navigation.css";

function Navigation(): JSX.Element {
  return (
    <header className="Header">
      <h2>Weather Task abra</h2>
      <img src={Logo} alt="Weather logo" className="weather-Logo" />
      <div className="Navigation">
        <NavLink to="/home" >
          <button>
            <HomeIcon>Home</HomeIcon>Home
          </button>
        </NavLink>
        <NavLink to="/favorites">
          <button>
            <FavoriteIcon />
            Favorites
          </button>
        </NavLink>
      </div>
    </header>
  );
}

export default Navigation;
