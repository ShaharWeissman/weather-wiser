import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/weather.logo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Navigation.css";
import TemperatureToggle from "../TempatureToggle";
import DarkModeToggle from "../DarkModeToggle";
import { Grid } from "@mui/material";

function Navigation(): JSX.Element {
  return (
    <Grid container>
      <header className="navbar">
        <div className="header">Abra Weather Task</div>
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <img src={Logo} alt="Weather logo" className="weather-Logo" />
        </Grid>
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
    </Grid>
  );
}
export default Navigation;
