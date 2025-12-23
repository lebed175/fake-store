import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./appReducer";
import { productApi } from "../entities/productCard/api/productApi";

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
