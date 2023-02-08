import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const albumNameSlice = createSlice({
  name: "sendAlbumIndex",

  initialState,
  reducers: {
    sendAlbumName: (state, action) => {
      state.value.push(...action.payload);
    },
  },
});

export const { getSlideData, clearSlideData } = albumNameSlice.actions;
export default albumNameSlice.reducer;
