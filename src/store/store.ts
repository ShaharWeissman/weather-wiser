import { configureStore } from "@reduxjs/toolkit";
import CitiesSlice from "./slices/citySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { LocationDetailsSlice } from "./slices/locationDetailsSlice";
import { DailyForecastDetailsSlice } from "./slices/dailyForecastDetailsSlice";

export const store = configureStore({
  reducer: {
    cities: CitiesSlice.reducer,
    locationDetails: LocationDetailsSlice.reducer,
    dailyForecastDetails: DailyForecastDetailsSlice.reducer,
  },
});

//customizations for typescript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//define and export the types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { setSelectedCity } = CitiesSlice.actions;
export const { setLocationDetails } = LocationDetailsSlice.actions;
export const { setDailyForecastDetails } = DailyForecastDetailsSlice.actions;
