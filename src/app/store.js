import { configureStore } from "@reduxjs/toolkit";
import asideReducer from "../pages/asideSlice.js";
import counterReducer from "../pages/reduxPage/counter/counterSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    aside: asideReducer,
  },
});

// console.log(store.getState().counter.value);
