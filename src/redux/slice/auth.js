import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
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
  },
});

const authReducer = authSlice.reducer;
export const userSelector = (state) => state.authReducer.user;
export const isLoggedInSelector = (state) => state.authReducer.isLoggedIn;

export const { loginSuccess, loginFail,logOut } = authSlice.actions;
export default authReducer;
