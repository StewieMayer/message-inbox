import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./features/threadsSlice";

export const store = configureStore({
  reducer: {
    threads: threadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
