import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slice/ui";
import authReducer from "./slice/auth";

export const store = configureStore({
  reducer: {
    uiReducer,
    authReducer,
  },
});
