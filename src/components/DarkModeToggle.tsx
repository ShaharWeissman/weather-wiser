import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/store";
import { toggleDarkTheme } from "../store/slices/citySlice";
import Switch from "@mui/material/Switch";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { styled } from "@mui/material/styles";

const DarkModeSwitch = styled(Switch)(({ theme, checked }) => ({
  width: 62,
  height: 34,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 7,
    "&.Mui-checked": {
      color: checked ? "#fff" : theme.palette.grey[500],
      transform: "translateX(28px)",
      "& + .MuiSwitch-track": {
        backgroundColor: checked
          ? theme.palette.common.black
          : theme.palette.grey[400],
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: checked
        ? theme.palette.common.white
        : theme.palette.grey[500],
    },
    "& + .MuiSwitch-track": {
      backgroundColor: checked
        ? theme.palette.grey[600]
        : theme.palette.grey[400],
      opacity: 1,
    },
  },
}));

function DarkModeToggle() {
  const dispatch = useDispatch();
  const isDarkTheme = useAppSelector((state) => state.cities.isDarkTheme);

  const handleDarkModeChange = () => {
    dispatch(toggleDarkTheme());
  };

  return (
    <DarkModeSwitch
      checked={isDarkTheme}
      onChange={handleDarkModeChange}
      icon={<LightModeIcon />}
      checkedIcon={<ModeNightIcon />}
    />
  );
}

export default DarkModeToggle;
