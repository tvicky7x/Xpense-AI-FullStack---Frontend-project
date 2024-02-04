import React from "react";
import LoginForm from "../Components/Auth/LoginForm";
import Popup from "../Components/Containers/Popup";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth() {
  // redux

  const popup = useSelector((state) => state.general.popup);

  // authentication
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return <Navigate to={"/records"} />;
  }

  return (
    <>
      {popup.state && <Popup />}
      <LoginForm />
    </>
  );
}

export default Auth;
