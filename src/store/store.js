import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "../services/account.slice";
import { backendApi } from "../services/api.config";

export const store = configureStore({
  reducer: {
    [backendApi.reducerPath]: backendApi.reducer,
    [accountSlice.name]: accountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(backendApi.middleware),
});
