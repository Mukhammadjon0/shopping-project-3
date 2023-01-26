import { configureStore } from "@reduxjs/toolkit";

import CountReducer from "./countSlice";
import productReducer from "./productSlice";
import UserReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    count: CountReducer,
    users: UserReducer,
    basket: productReducer,
  },
});

