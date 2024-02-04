import axios from "axios";
import { authActions } from "./authSlice";
import { updateApp } from "./accountAction";

export function Login(token) {
  return async (dispatch) => {
    dispatch(authActions.showLoading({ loading: true }));
    const res = await axios.post("/verify", { token });
    if (res.data.error) {
      localStorage.removeItem("token");
      dispatch(authActions.logout());
    } else {
      dispatch(authActions.login({ token }));
      const { accountsArray, expenseCategories, incomeCategories } = res.data;
      dispatch(updateApp(accountsArray, expenseCategories, incomeCategories));
    }
    dispatch(authActions.showLoading({ loading: false }));
  };
}
