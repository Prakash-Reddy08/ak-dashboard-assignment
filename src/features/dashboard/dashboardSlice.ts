import { createSlice } from "@reduxjs/toolkit";

// name of action
// initial state
// reducer

const initialState = {
  count: 0,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = dashboardSlice.actions;

export default dashboardSlice.reducer;
