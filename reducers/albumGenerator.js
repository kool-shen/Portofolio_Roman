import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const albumSlice = createSlice({
  name: "albumGenerator",

  initialState,
  reducers: {
    generate: (state, action) => {
      state.value.push(...action.payload);
    },
    target: (state, action) => {
      state.value.unshift(action.payload);
    },
  },
});

export const { generate, target } = albumSlice.actions;
export default albumSlice.reducer;
