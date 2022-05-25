import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://12c5-116-110-40-30.ap.ngrok.io/api/";

export const fetchReservationBook = createAsyncThunk(
  "book/fetchReservationBook",
  async () => {
    const response = await axios.get(API_URL + "reservation/reserving");
    return response.data;
  }
);
const bookSlice = createSlice({
  name: "users",
  initialState: {
    book: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchReservationBook.fulfilled, (state, action) => {
      // Add user to the state array
      state.book = action.payload;
    });
  },
});
const bookReducer = bookSlice.reducer;
export const bookSelector = (state) => state.bookReducer.book;
export const isLoggedInSelector = (state) => state.bookReducer.isLoggedIn;

export default bookReducer;
