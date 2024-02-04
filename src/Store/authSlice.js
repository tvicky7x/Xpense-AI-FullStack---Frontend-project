import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
    },
    logout(state) {
      state.token = "";
    },
    showLoading(states, actions) {
      states.isLoading = actions.payload.loading;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
