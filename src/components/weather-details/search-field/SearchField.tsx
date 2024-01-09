import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { City } from "../../../types/ICity";
import {
  fetchCitiesData,
  setSelectedCity,
} from "../../../store/slices/citySlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

import "./SearchField.css";
import notifyService from "../../../utils/NotifyMessage";
import debounce from "../../../utils/Debounce";

function SearchField(): JSX.Element {
  const dispatch = useAppDispatch();
  const cities = useAppSelector((state) => state.cities.cities);

  const handleInputChange = debounce((_: unknown, cityStr: string) => {
    console.log(`handleInputChange:`, { cityStr });
    const isEnglish = /^[A-Za-z ]+$/;
    if (!isEnglish.test(cityStr)) {
      console.log("Error - Only English letters allowed!");
      notifyService.error("Please use only English characters");
      return;
    }
    if (cityStr?.length) {
      dispatch(fetchCitiesData(cityStr));
    }
  }, 500);

  const handleCitySelect = (
    _: React.SyntheticEvent<Element, Event>,
    value: City | null
  ) => {
    dispatch(setSelectedCity(value));
    console.log(`The city you chose is ${value?.LocalizedName}`, value);
  };

  return (
    <div className="SearchField">
      <Autocomplete
        id="city-select"
        options={cities || []}
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
