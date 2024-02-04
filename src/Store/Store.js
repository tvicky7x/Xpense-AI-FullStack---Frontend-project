import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import authSlice from "./authSlice";
import accountSlice from "./accountSlice";
import analysisSlice from "./analysisSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authSlice,
    account: accountSlice,
    analysis: analysisSlice,
  },
});

export default store;
