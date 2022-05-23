import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    tab: 0,
  },
  reducers: {
    changeTab(state, action) {
      state.tab = action.payload;
    },
  },
});

const uiReducer = uiSlice.reducer;

export const uiSelector = (state) => state.uiReducer.tab;
export const { changeTab } = uiSlice.actions;
export default uiReducer;
