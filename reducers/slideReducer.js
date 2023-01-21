import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const slideSlice = createSlice({
  name: "slideReducer",

  initialState,
  reducers: {
    getSlideData: (state, action) => {
      state.value = action.payload;
    },

    clearSlideData: (state, action) => {
      state.value = initialState;
    },
  },
});

export const { getSlideData, clearSlideData } = slideSlice.actions;
export default slideSlice.reducer;
