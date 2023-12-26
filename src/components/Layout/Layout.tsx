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
