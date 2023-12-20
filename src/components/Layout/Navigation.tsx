import Logo from "../../assets/images/weather.logo.jpg";
import "./Navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from '@mui/icons-material/Favorite';
function Navigation(): JSX.Element {
  return (
    <header className="Header">
      <h2>Weather Task</h2>
      <img src={Logo} alt="Weather logo" className="weather-Logo" />
      <div className="Navigation">
        <button>
          <HomeIcon>Home</HomeIcon>Home
        </button>
        <button><FavoriteIcon/>Favorites</button>
      </div>
    </header>
  );
}

export default Navigation;
