import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CitiesState } from "../../types";
import { cityLookup } from "../../tests/mocks/api/service";

const initialState: CitiesState = {
  cities: [],
  selectedCity: null,
  loading: false,
  error: null,
  isMetric: true,
  favorites: [],
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
    toggleFavorite: (state, action) => {
      // action is City we check state.favorites if it includes the city
      // if it does we remove it from the array
      // if it doesn't we add it to the array
      const city = action.payload;
      const index = state.favorites.findIndex(
        (favorite) => favorite.Key === city.Key
      );
      if (index === -1) {
        state.favorites.push(city);
      } else {
        state.favorites.splice(index, 1);
      }
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

export const { setCities, setSelectedCity, toggleMetric, toggleFavorite } =
  citiesSlice.actions;
export default citiesSlice;
