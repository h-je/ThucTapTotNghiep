import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "react-feather";
const API_URL = process.env.REACT_APP_API_URL;

const user = JSON.parse(localStorage.getItem("user"));
export const getUserInfo = createAsyncThunk("user/getUserInfo", async () => {
  const response = await axios.get(API_URL + "/users/me", {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  });
  return response.data;
});
// export const isFavoriteBook = createAsyncThunk(
//   "users/isFavoriteBook",
//   async (isbn) => {
//     console.log(isFavoriteBook);
//     const response = await axios.put(
//       API_URL + "/users/likebook",
//       {
//         headers: {
//           Authorization: "Bearer " + user.token,
//         },
//       },
//       {
//         param: book.isbn,
//       }
//     );
//     return response.data;
//   }
// );

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async (info) => {
    const response = await axios.put(
      API_URL + "/users",
      {
        id: info.id,
        username: info.username,
        firstName: info.firstName,
        lastName: info.lastName,
        password: info.password,
        roles: info.roles,
        email: info.email,
        dateOfBirth: info.dateOfBirth,
      },
      {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }
    );
    return response.data;
  }
);

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
    builder.addCase(getUserInfo.pending, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userName = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.password = action.payload.password;
    });
    // builder.addCase(isFavoriteBook.fulfilled, (state, action) => {
    //   state.isFavoritebook = action.payload;
    // });
  },
});

const authReducer = authSlice.reducer;
export const userSelector = (state) => state.authReducer.user;
export const isLoggedInSelector = (state) => state.authReducer.isLoggedIn;
export const authSelector = (state) => state.authReducer;

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
export default authReducer;
