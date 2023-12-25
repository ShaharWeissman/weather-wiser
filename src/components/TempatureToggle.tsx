import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleMetric } from "../store/slices/citySlice";

function TemperatureToggle() {
  const isMetric = useAppSelector((state) => state.cities.isMetric);
  const dispatch = useAppDispatch();
  const handleTemperatureChange = () => {
    dispatch(toggleMetric());
  };

  return (
    <ToggleButtonGroup
      value={isMetric}
      exclusive
      onChange={handleTemperatureChange}
      aria-label="temperature">
      <ToggleButton value={true} aria-label="celsius">
        C
      </ToggleButton>
      <ToggleButton value={false} aria-label="fahrenheit">
        F
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TemperatureToggle;
