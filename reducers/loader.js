import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const loaderSlice = createSlice({
  name: "loader",

  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { isLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
