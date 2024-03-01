import Logo from "../../assets/images/weather.logo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Navigation.css";
import TemperatureToggle from "../TempatureToggle";
import DarkModeToggle from "../DarkModeToggle";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function Navigation(): JSX.Element {
  const theme = useTheme();
  console.log(theme.palette);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#f8f8f0", color: "#072b41" }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
        }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ mr: 2 }}>
          <img
            src={Logo}
            alt="Weather logo"
            style={{ width: 50, height: "auto" }}
          />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Abra Weather Task
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}>
          <Box sx={{ display: "flex", gap: 2 }}></Box>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit" startIcon={<HomeIcon />}>
              Home
            </Button>
          </NavLink>
          <NavLink
            to="/favorites"
            style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit" startIcon={<FavoriteIcon />}>
              Favorites
            </Button>
          </NavLink>
          <TemperatureToggle />
          <DarkModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
