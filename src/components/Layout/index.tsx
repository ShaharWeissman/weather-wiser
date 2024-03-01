import { Outlet } from "react-router-dom";
import "./Layout.css";
import Navigation from "./Navigation";
import { Container, Grid } from "@mui/material";

function Layout(): JSX.Element {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
