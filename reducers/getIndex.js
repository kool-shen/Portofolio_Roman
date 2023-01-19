import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const indexSlice = createSlice({
  name: "getIndex",

  initialState,
  reducers: {
    getIndexInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getIndexInfo } = indexSlice.actions;
export default indexSlice.reducer;
