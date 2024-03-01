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
    <Autocomplete
      id="city-select"
      options={cities || []}
      getOptionLabel={(option) => option.LocalizedName}
      onInputChange={handleInputChange}
      onChange={handleCitySelect}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a city"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root": { color: "#74a7de" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#507dac" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#507dac",
              },
              "&:hover fieldset": {
                borderColor: "#507dac",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#507dac",
              },
            },
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
          }}
        />
      )}
      sx={{
        width: "100%",
        margin: "auto",
        borderRadius: "8px",
        backgroundColor: "background.paper",
      }}
    />
  );
}

export default SearchField;
