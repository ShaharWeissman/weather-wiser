import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/layout/Routing";
import { useAppSelector } from "./store/store";
import "./WeatherApp.css";
function WeatherApp() {
  const isDarkTheme = useAppSelector((state) => state.cities.isDarkTheme);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-mode" : "light-mode";
  }, [isDarkTheme]);

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default WeatherApp;
