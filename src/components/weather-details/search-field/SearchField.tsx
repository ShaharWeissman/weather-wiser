import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { RootState } from "../../../store/rootState";
import { City } from "../../../types";
import { fetchCitiesData, setSelectedCity } from "../../../store/citySlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

import "./SearchField.css";
// Debounce function in TypeScript
const debounce = <F extends (...args: never[]) => void>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: number | null = null;
  return (...args: Parameters<F>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

function SearchField(): JSX.Element {
  const dispatch = useAppDispatch();
  const cities = useAppSelector((state: RootState) => state.cities.cities);

  const handleInputChange = debounce((_: unknown, cityStr: string) => {
    console.log(`handleInputChange:`, { cityStr });
    dispatch(fetchCitiesData(cityStr));
  }, 500);

  const handleCitySelect = (
    event: React.SyntheticEvent<Element, Event>,
    value: City | null
  ) => {
    dispatch(setSelectedCity(value));
    console.log(`The city you chose is ${value?.LocalizedName}`, value);
  };

  return (
    <div className="SearchField">
      <Autocomplete
        id="city-select"
        options={cities}
        getOptionLabel={(option) => option.LocalizedName}
        getOptionKey={(option) => option.Key}
        onInputChange={handleInputChange}
        onChange={handleCitySelect}
        renderInput={(params) => (
          <TextField {...params} label="Choose a city" variant="outlined" />
        )}
      />
    </div>
  );
}

export default SearchField;
