import React, { useState } from "react";
import HeadNavbar from "../Navbar/HeadNavbar";
import SecondNavbar from "../Navbar/SecondNavbar";
import { useLocation } from "react-router-dom";
import PulseButton from "../util/PulseButton";
import Popup from "../Containers/Popup";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import AddExpense from "../Expense/AddExpense";
import AddCategory from "../Category/AddCategory";

function Layout({ children }) {
  // redux
  const popup = useSelector((state) => state.general.popup);
  const token = useSelector((state) => state.auth.token);
  const modalState = useSelector((state) => state.general.modalState);
  const categoryModalState = useSelector(
    (state) => state.general.categoryModalState
  );
  const location = useLocation();
  const [scrollState, setScrollState] = useState({ value: 0, state: true });

  function updateScrollState(value) {
    if (value > scrollState.value) {
      setScrollState({ value: value, state: false });
    } else {
      setScrollState({ value: value, state: true });
    }
  }

  // authentication
  if (!token) {
    return <Navigate to={"/auth"} />;
  }
  return (
    <div
      className="h-screen overflow-y-scroll pb-6"
      onScroll={(e) => {
        updateScrollState(Math.trunc(e.target.scrollTop));
      }}
    >
      {modalState && <AddExpense />}
      {categoryModalState && <AddCategory />}
      <Loading />
      {popup.state && <Popup />}
      <HeadNavbar />
      {location.pathname !== "/profile" && <SecondNavbar />}
      {children}
      {scrollState.state && (
        <PulseButton classStyle={" fixed right-6 bottom-6"} />
      )}
    </div>
  );
}

export default Layout;
