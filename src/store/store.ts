import { configureStore } from "@reduxjs/toolkit";
import CitiesSlice from "./citySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cities: CitiesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const { setSelectedCity } = CitiesSlice.actions;

export type AppDispatch = typeof store.dispatch;

// אין פה לוגיקה מורכבת ולכן לא צריך סלייסים . צריך רק אחד
// סלייס נפרד מוסיף מורכבות מאוד גדולה
//אפשר פשוט רידוסר אחד !
