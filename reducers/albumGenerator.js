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
    clear: (state, action) => {
      state.value = [];
    },
  },
});

export const { generate, clear } = albumSlice.actions;
export default albumSlice.reducer;
