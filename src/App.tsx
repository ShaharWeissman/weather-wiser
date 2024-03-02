import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useAppSelector } from "./store/store";
import Routing from "./Routing";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#f8f8f0",
    },
    secondary: {
      main: "#dfe9f5",
    },
  },
  typography: {
    fontFamily: '"Secular One", sans-serif',
    allVariants: {
      color: "#072b41",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(45deg, lightblue, white)",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2f3237" },
    secondary: { main: "#dfe9f5" },
  },
  typography: {
    fontFamily: '"Secular One", sans-serif',
    allVariants: {
      color: "white",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(45deg, #061925, #0b0d22)",
        },
      },
    },
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      button: {
        fontFamily: '"Secular One", sans-serif',
      },
    }}
  />
);

function App() {
  const isDarkTheme = useAppSelector((state) => state.cities.isDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {globalStyles}
      <Routing />
    </ThemeProvider>
  );
}

export default App;
