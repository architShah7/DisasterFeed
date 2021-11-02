import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../features/feed/postsSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
