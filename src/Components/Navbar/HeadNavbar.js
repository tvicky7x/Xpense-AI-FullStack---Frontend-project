import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function HeadNavbar() {
  const location = useLocation();
  return (
    <div className=" bg-lime-500 py-2 px-3 sm:py-3">
      <div className=" max-w-3xl mx-auto flex justify-end items-center sm:space-x-3 space-x-3">
        <NavLink to={"/"} className="me-auto">
          <p className="font-medium text-2xl sm:text-3xl text-lime-50">
            Xpense AI{" "}
          </p>
        </NavLink>
        <NavLink
          to={"/records"}
          className={
            location.pathname !== "/profile"
              ? "flex text-lime-50"
              : "flex text-lime-300 hover:text-lime-100"
          }
        >
          <span className="material-symbols-outlined sm:text-3xl">
            add_chart
          </span>
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => {
            return isActive
              ? " flex text-lime-50"
              : " flex text-lime-300 hover:text-lime-100";
          }}
        >
          <span className="material-symbols-outlined sm:text-3xl">
            account_circle
          </span>
        </NavLink>

        <button className=" font-medium bg-lime-300 py-0.5 px-2 sm:py-1 sm:px-3 rounded text-lime-600 hover:bg-lime-200">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default HeadNavbar;
