import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slice/ui";
import authReducer from "./slice/auth";
import bookReducer from "./slice/book";
export const store = configureStore({
  reducer: {
    uiReducer,
    authReducer,
    bookReducer
  },
});
