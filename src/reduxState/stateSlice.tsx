import { createSlice } from "@reduxjs/toolkit";

type stateData = {
  pageIndex: number;
  isFormStarted: boolean;
};

const initialState: stateData = {
  pageIndex: 0,
  isFormStarted: false
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    next: state => {
      state.pageIndex++;
    },
    prev: state => {
      state.pageIndex--;
    },

    gotopage: (state, action) => {
      state.pageIndex = action.payload;
    },

    setFormStarted: (state, action) => {
      state.isFormStarted = action.payload;
    }
  }
});

export const { next, prev, gotopage, setFormStarted } = stateSlice.actions;

export default stateSlice.reducer;
