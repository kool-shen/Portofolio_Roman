import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const focusSlice = createSlice({
  name: "focus",

  initialState,
  reducers: {
    isClicked: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { isClicked } = focusSlice.actions;
export default focusSlice.reducer;
