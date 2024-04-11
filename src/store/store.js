import { configureStore } from "@reduxjs/toolkit";
import paletteReducer from "../features/palette/paletteSlice";

const store = configureStore({
  reducer: {
    palette: paletteReducer,
  },
});

export default store;
