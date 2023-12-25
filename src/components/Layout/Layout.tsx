import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navigation from "./Navigation";

function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;

// function Layout(): JSX.Element {
//   const isDarkMode = useAppSelector(state => state.yourReducer.isDarkMode);

//   // Create a theme instance
//   const theme = createTheme({
//     palette: {
//       mode: isDarkMode ? 'dark' : 'light',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="Layout">
//         <Navigation />
//         <Outlet />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default Layout;
