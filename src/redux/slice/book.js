import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const fetchReservationBook = createAsyncThunk(
  "book/fetchReservationBook",
  async (id) => {
    const response = await axios.get(API_URL + "/reservation/reserving/" + id);
    return response.data;
  }
);
export const deleteReservationBook = createAsyncThunk(
  "book/deleteReservationBook",
  async (id) => {
    const response = await axios
      .put(API_URL + "/reservation/cancel/" + id)
      .then(() => {
        fetchReservationBook(id);
      });
    console.log(response.data);
    return response.data;
  }
);
const bookSlice = createSlice({
  name: "users",
  initialState: {
    book: null,
    // delete: "",
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
    // builder.addCase(deleteReservationBook.fulfilled, (state, action) => {
    //   state.book = action.payload;
    // });
  },
});
const bookReducer = bookSlice.reducer;
export const bookSelector = (state) => state.bookReducer.book;
export const isLoggedInSelector = (state) => state.bookReducer.isLoggedIn;

export default bookReducer;
