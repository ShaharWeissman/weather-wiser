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
      main: "#072b41",
    },
    secondary: {
      main: "#f8f8f0",
    },
  },
  typography: {
    fontFamily: '"Secular One", sans-serif',
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f8f8f0" },
    secondary: {
      main: "#072b41",
    },
  },
  typography: {
    fontFamily: '"Secular One", sans-serif',
  },
});
const globalStyles = (
  <GlobalStyles
    styles={{
      "html, body, #root": {
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "linear-gradient(45deg, lightblue, white)",
      },
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
