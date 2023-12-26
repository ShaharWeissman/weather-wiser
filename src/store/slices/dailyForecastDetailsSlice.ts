import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DailyForecastDetailsState } from "../../types";
import HttpService from "../../http";

export const initialState: DailyForecastDetailsState = {
  dailyForecastDetails: [],
  loading: false,
  error: null,
};

export const fetchDailyForecastDetails = createAsyncThunk(
  "dailyForecastDetails/fetchDailyForecastDetails",
  async ({
    locationKey,
    isMetric,
  }: {
    locationKey: string;
    isMetric: boolean;
  }) => {
    const dailyForecastDetails = await HttpService.getDailyForecast(
      locationKey,
      isMetric
    );
    return dailyForecastDetails;
  }
);

export const DailyForecastDetailsSlice = createSlice({
  name: "dailyForecastDetails",
  initialState,
  reducers: {
    setDailyForecastDetails: (state, action) => {
      state.dailyForecastDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDailyForecastDetails.rejected, (state, action) => {
      state.error = action.error?.message || null;
    }),
      builder.addCase(fetchDailyForecastDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(fetchDailyForecastDetails.fulfilled, (state, action) => {
        state.dailyForecastDetails = action.payload.DailyForecasts;
        state.loading = false;
      });
  },
});
export const { setDailyForecastDetails } = DailyForecastDetailsSlice.actions;
export default DailyForecastDetailsSlice.reducer;
