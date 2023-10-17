import { configureStore } from "@reduxjs/toolkit";
import asideReducer from "../features/asideSlice.js";

export const store = configureStore({
  reducer: {
    aside: asideReducer,
  },
});
