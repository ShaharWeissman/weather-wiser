import { Box, Typography, useTheme } from "@mui/material";
import image404 from "../../assets/images/404.png";

function Page404(): JSX.Element {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        textAlign: "center",
        padding: "20px",
      }}>
      <Typography variant="h5">Sorry,</Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>

      <img
        src={image404}
        alt="Page Not Found"
        style={{ width: "100%", maxWidth: "300px", margin: "20px auto" }}
      />
    </Box>
  );
}

export default Page404;
