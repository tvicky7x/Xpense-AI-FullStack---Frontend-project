import { generalActions } from "./generalSlice";

export function openPopupComponent(massage, isError = false) {
  return (dispatch) => {
    dispatch(generalActions.openPopup({ massage, isError }));
    setTimeout(() => {
      dispatch(generalActions.closePopup());
    }, 5000);
  };
}
