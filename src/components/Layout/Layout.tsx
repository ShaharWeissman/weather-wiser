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

// import { useDispatch } from "react-redux";
// import { useAppSelector } from "../store/store";
// import { toggleDarkTheme } from "../store/slices/citySlice";
// import Switch from "@mui/material/Switch";
// import ModeNightIcon from '@mui/icons-material/ModeNight';
// import Brightness5Icon from '@mui/icons-material/Brightness5';
// import { styled } from '@mui/material/styles';

// const DarkModeSwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   '& .MuiSwitch-switchBase': {
//     color: '#fff', // thumb color
//     '&.Mui-checked': {
//       color: '#fff', // thumb color when checked
//     },
//     '&.Mui-checked + .MuiSwitch-track': {
//       backgroundColor: '#000', // track color when checked
//     },
//   },
//   '& .MuiSwitch-track': {
//     backgroundColor: '#000', // track color
//   },
// }));

// function DarkModeToggle() {
//   const dispatch = useDispatch();
//   const isDarkTheme = useAppSelector((state) => state.cities.isDarkTheme);

//   const handleDarkModeChange = () => {
//     dispatch(toggleDarkTheme());
//   };

//   return (
//     <DarkModeSwitch
//       checked={isDarkTheme}
//       onChange={handleDarkModeChange}
//       icon={<Brightness5Icon />}
//       checkedIcon={<ModeNightIcon />}
//     />
//   );
// }

// export default DarkModeToggle;

// export default Layout;
