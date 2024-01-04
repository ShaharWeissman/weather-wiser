import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CitiesState, City } from "../../types";
import HttpService from "../../http";
import notifyService from "../../utils/NotifyMessage";
// import notifyService from "../../utils/NotifyMessage";
// import { cityLookup } from "../../tests/mocks/api/service";

const initialState: CitiesState = {
  cities: [],
  selectedCity: null,
  loading: false,
  error: null,
  isMetric: true,
  favorites: [],
  isDarkTheme: false,
};

export const fetchGeoCoordinates = createAsyncThunk(
  "cities/fetchGeoCoordinates",
  async (_, { dispatch }) => {
    return new Promise<City>((resolve, reject) => {
      if (!navigator.geolocation) {
        notifyService.error("GPS location is not supported by this browser");
        return reject(new Error("Geolocation not supported"));
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log(`${lat} ${lon}`);
          try {
            const weatherGeoData = await HttpService.getGeoLocation(lat, lon);
            dispatch(setSelectedCity(weatherGeoData));
            resolve(weatherGeoData);
          } catch (error) {
            notifyService.error("Error fetching location data");
            reject(new Error("Error fetching location data"));
          }
        },
        () => {
          notifyService.error("Geolocation permission denied");
          reject(new Error("Geolocation permission denied"));
        }
      );
    });
  }
);

export const fetchCitiesData = createAsyncThunk(
  "cities/fetchCitiesData",
  async (cityStr: string): Promise<City[]> => {
    const cities = await HttpService.cityLookup(cityStr);
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
    toggleDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      document.documentElement.style.setProperty(
        "--font-color",
        state.isDarkTheme ? "white" : "#072b41"
      );
      document.documentElement.style.setProperty(
        "--bg-img-col1",
        state.isDarkTheme ? "black" : "lightblue"
      );
      document.documentElement.style.setProperty(
        "--bg-img-col2",
        state.isDarkTheme ? "#262626" : "white"
      );
      document.documentElement.style.setProperty(
        "--cont-col",
        state.isDarkTheme ? "#4F4F4F" : "#f8f8f0"
      );
      document.documentElement.style.setProperty(
        "--card-col",
        state.isDarkTheme ? "#363636" : "dfdfd8"
      );
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

export const {
  setCities,
  setSelectedCity,
  toggleMetric,
  toggleFavorite,
  toggleDarkTheme,
} = citiesSlice.actions;
export default citiesSlice;
