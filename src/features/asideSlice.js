import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const asideSlice = createSlice({
  name: "aside",
  initialState,
  reducers: {
    showAside: (state) => {
      state.value = true;
    },
    hideAside: (state) => {
      state.value = false;
    },
  },
});

export const { showAside, hideAside } = asideSlice.actions;
export default asideSlice.reducer;
