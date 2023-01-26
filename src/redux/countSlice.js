import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    plus: (state) => {
     return( state = state + 1);
    },
    minus: (state) => {
      return (state = state - 1);
    },
  },
});

export const { plus, minus } = countSlice.actions;
export default countSlice.reducer;
