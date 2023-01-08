import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { image: "", collection: "", description: "", year: "" },
};

export const hoverSlice = createSlice({
  name: "hoverDisplay",

  initialState,
  reducers: {
    display: (state, action) => {
      //console.log(state.value.image);
      state.value.image = action.payload.image;
      state.value.collection = action.payload.collection;
      state.value.description = action.payload.description;
      state.value.year = action.payload.year;
    },
  },
});

export const { display } = hoverSlice.actions;
export default hoverSlice.reducer;
