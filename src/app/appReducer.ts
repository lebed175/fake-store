import { combineReducers } from "@reduxjs/toolkit";
import { productApi } from "../entities/productCard/api/productApi";

export const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});
