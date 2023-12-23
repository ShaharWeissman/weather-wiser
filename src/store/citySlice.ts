import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CitiesState } from "../types";
import { cityLookup } from "../tests/mocks/api/service";

export const fetchCitiesData = createAsyncThunk(
  "cities/fetchCitiesData",
  async (cityStr: string) => {
    const cities = await cityLookup(cityStr);
    return cities;
  }
);

const initialState: CitiesState = {
  cities: [],
  selectedCity: null,
  loading: false,
  error: null,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCitiesData.rejected, (state, action) => {
      state.error = action.error.message || null;
    });
    builder.addCase(fetchCitiesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCitiesData.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.loading = false;
    });
  },
});

export const { setCities, setSelectedCity } = citiesSlice.actions;
export default citiesSlice;
