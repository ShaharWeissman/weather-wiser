import { getCurrentWeather } from "../../http";
import { LocationDetails, LocationDetailsState } from "../../types";
// import { getCurrentWeather } from "../../tests/mocks/api/service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState: LocationDetailsState = {
  locationDetails: null,
  loading: false,
  error: null,
};

export const fetchLocationDetails = createAsyncThunk(
  "locationDetails/fetchLocationDetails",
  async (locationKey: string): Promise<LocationDetails[]> => {
    const locationDetails = await getCurrentWeather(locationKey);
    return locationDetails;
  }
);

export const LocationDetailsSlice = createSlice({
  name: "locationDetails",
  initialState,
  reducers: {
    setLocationDetails: (state, action) => {
      state.locationDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocationDetails.rejected, (state, action) => {
      state.error = action.error?.message || null;
    }),
      builder.addCase(fetchLocationDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(fetchLocationDetails.fulfilled, (state, action) => {
        state.locationDetails = action.payload[0];
        state.loading = false;
      });
  },
});

export const { setLocationDetails } = LocationDetailsSlice.actions;
export default LocationDetailsSlice.reducer;
