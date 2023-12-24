import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDailyForecast } from "../tests/mocks/api/service";
import { DailyForecastDetailsState } from "../types";

export const initialState: DailyForecastDetailsState = {
  dailyForecastDetails: [],
  loading: false,
  error: null,
};

export const fetchDailyForecastDetails = createAsyncThunk(
  "dailyForecastDetails/fetchDailyForecastDetails",
  async (locationKey: string) => {
    const dailyForecastDetails = await getDailyForecast(locationKey);
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
        state.dailyForecastDetails = action.payload;
        state.loading = false;
      });
  },
});
export const { setDailyForecastDetails } = DailyForecastDetailsSlice.actions;
export default DailyForecastDetailsSlice.reducer;
