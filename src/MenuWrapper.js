// MenuWrapper.js
import React, { useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { generalActions } from "./Store/generalSlice";

const MenuWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  const handleClickOutside = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // Check if the click occurred inside the menu component
        const isClickInsideMenu = event.target.closest(".menu-component");

        // If the click is not inside the menu, close all menus
        if (!isClickInsideMenu) {
          dispatch(generalActions.closeAllMenus());
        }
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, handleClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default MenuWrapper;
