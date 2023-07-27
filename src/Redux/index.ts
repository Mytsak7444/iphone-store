import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import phonesReducer from "./phones/reducer";

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
