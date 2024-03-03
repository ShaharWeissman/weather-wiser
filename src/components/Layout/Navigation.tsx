import Logo from "../../assets/images/weather.logo.jpg";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
    <AppBar
      position="sticky"
      sx={{
        bgcolor: theme.palette.primary.main,
      }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}>
        {/* logo... */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
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
        </Box>

        {/* nav buttons.... */}
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",

            gap: 4,
          }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<HomeIcon />}
              sx={{
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
              }}>
              Home
            </Button>
          </NavLink>
          <NavLink to="/favorites" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<FavoriteIcon />}
              sx={{
                color: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
              }}>
              Favorites
            </Button>
          </NavLink>
        </Box>

        {/* box fo the toggels.... */}
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            justifyContent: "flex-end",
            gap: 2,
            mt: { xs: 2, sm: 0 },
          }}>
          <TemperatureToggle />
          <DarkModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
