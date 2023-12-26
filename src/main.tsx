import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/layout/Routing";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>
);
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// import WeatherApp from "./WeatherApp"; // Assuming Main is the file where you define the above Main component

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <WeatherApp />
//   </Provider>
// );
