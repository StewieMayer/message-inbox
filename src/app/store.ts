import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./features/threadsSlice";
import inboxReducer from "./features/inboxSlice";

export const store = configureStore({
  reducer: {
    threads: threadReducer,
    inbox: inboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
