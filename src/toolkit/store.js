import { configureStore } from "@reduxjs/toolkit";
// import { SeedsApi } from "./Seeds/SeedsApi";
import SeedsSlice from "./Seeds/SeedsSlice";

export const store = configureStore({
  reducer: {
    SeedsSlice: SeedsSlice,
    // [SeedsApi.reducerPath]: SeedsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SeedsApi.middleware),
});
