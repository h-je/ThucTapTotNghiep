import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (token) => {
    const response = await axios.put(API_URL + "/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  }
);
const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? {
      isLoggedIn: true,
      user,
      userName: "",
      firstName: "",
      email: "",
      lastName: "",
      dateOfBirth: "",
      password: "",
    }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "update",
  initialState: initialState,

  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    loginFail(state, action) {
      state.user = null;
      state.isLoggedIn = false;
    },
    logOut(state, action) {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setDOB(state, action) {
      state.dateOfBirth = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(updateUserInfo.pending, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      state.userName = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.password = action.payload.password;
    });
  },
});

const updateReducer = authSlice.reducer;
export const userSelector = (state) => state.updateReducer.user;
export const isLoggedInSelector = (state) => state.updateReducer.isLoggedIn;
export const authSelector = (state) => state.updateReducer;

export const {
  loginSuccess,
  loginFail,
  logOut,
  setDOB,
  setEmail,
  setFirstName,
  setLastName,
  setUserName,
  setPassword,
} = authSlice.actions;
export default updateReducer;
