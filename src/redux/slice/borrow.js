import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const fetchBorrorwingOfUser = createAsyncThunk(
  "borrow/fetchBorrorwingOfUser",
  async (id) => {
    const response = await axios.get(API_URL + "/borrowbook/borrowing/" + id);
    return response.data;
  }
);
export const fetchBorrorwedOfUser = createAsyncThunk(
  "borrow/fetchBorrorwedOfUser",
  async (id) => {
    const response = await axios.get(API_URL + "/borrowbook/" + id);
    return response.data;
  }
);
const borrowSlice = createSlice({
  name: "borrows",
  initialState: {
    borrowed: null,
    borrowing: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBorrorwingOfUser.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      state.borrowing = action.payload;
    });

    builder.addCase(fetchBorrorwedOfUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.borrowed = action.payload;
    });
  },
});
const borrowReducer = borrowSlice.reducer;
export const borrowingSelector = (state) => state.borrowReducer.borrowing;
export const borrowedSelector = (state) => state.borrowReducer.borrowed;

export const isLoggedInSelector = (state) => state.borrowReducer.isLoggedIn;

export default borrowReducer;
