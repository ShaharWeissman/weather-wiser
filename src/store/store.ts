import { configureStore } from "@reduxjs/toolkit";
import CitiesSlice from "./slices/citySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { LocationDetailsSlice } from "./slices/locationDetailsSlice";
import { DailyForecastDetailsSlice } from "./slices/dailyForecastDetailsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const citiesPersisConfig = {
  key: "cities",
  storage,
};
const locationPersistConfig = {
  key: "location",
  storage,
};
const forecastPersistConfig = {
  key: "forecast",
  storage,
};

const persistedCitiesReducer = persistReducer(
  citiesPersisConfig,
  CitiesSlice.reducer
);
const persistedLocationDetailsReducer = persistReducer(
  locationPersistConfig,
  LocationDetailsSlice.reducer
);
const persistedDailyForecastDetailsReducer = persistReducer(
  forecastPersistConfig,
  DailyForecastDetailsSlice.reducer
);

export const store = configureStore({
  reducer: {
    cities: persistedCitiesReducer,
    locationDetails: persistedLocationDetailsReducer,
    dailyForecastDetails: persistedDailyForecastDetailsReducer,
  },
});

export const persistor = persistStore(store);

//customizations for typescript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//define and export the types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { setSelectedCity } = CitiesSlice.actions;
export const { setLocationDetails } = LocationDetailsSlice.actions;
export const { setDailyForecastDetails } = DailyForecastDetailsSlice.actions;
