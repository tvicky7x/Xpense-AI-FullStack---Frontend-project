import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalState: false,
  categoryModalState: false,
  popup: {
    state: false,
    massage: "",
    isError: false,
  },
};

const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    changeModelState(state) {
      state.modalState = !state.modalState;
    },
    changeCategoryModelState(state) {
      state.categoryModalState = !state.categoryModalState;
    },
    openPopup(state, action) {
      state.popup.state = true;
      state.popup.massage = action.payload.massage;
      if (action.payload.isError) {
        state.popup.isError = action.payload.isError;
      }
    },
    closePopup(state) {
      state.popup.state = false;
      state.popup.isError = false;
    },
    openMenu: (state, action) => {
      state[action.payload.buttonId] = true;
    },
    closeMenu: (state, action) => {
      state[action.payload.buttonId] = false;
    },
    closeAllMenus: (state) => {
      // Close all menus
      Object.keys(state).forEach((buttonId) => {
        state[buttonId] = false;
      });
    },
  },
});

export const generalActions = generalSlice.actions;

export default generalSlice.reducer;
