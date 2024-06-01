import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import newsReducer from "./newsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    news: newsReducer,
  },
});
