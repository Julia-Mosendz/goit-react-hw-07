import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload.searchName
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
