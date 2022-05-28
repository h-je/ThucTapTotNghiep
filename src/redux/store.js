import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slice/ui";
import authReducer from "./slice/auth";
import bookReducer from "./slice/book";
import borrowReducer from "./slice/borrow"
export const store = configureStore({
  reducer: {
    uiReducer,
    authReducer,
    bookReducer,
    borrowReducer
  },
});
