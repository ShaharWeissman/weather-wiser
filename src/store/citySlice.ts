import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CitiesState } from "../types";
import { cityLookup, mockFavorites } from "../tests/mocks/api/service";

const favorites = /*import.meta.NODE_ENV==='dev' ? [...]:[]*/ mockFavorites;

const initialState: CitiesState = {
  cities: [],
  selectedCity: null,
  loading: false,
  error: null,
  isMetric: true,
  favorites,
};

export const fetchCitiesData = createAsyncThunk(
  "cities/fetchCitiesData",
  async (cityStr: string) => {
    const cities = await cityLookup(cityStr);
    return cities;
  }
);

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
    toggleMetric: (state) => {
      state.isMetric = !state.isMetric;
    },
  },
  //toggleMetric(true) //action needed
  //toggleMetric() //no action
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
