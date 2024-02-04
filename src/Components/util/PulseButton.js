import React from "react";
import { useDispatch } from "react-redux";
import { generalActions } from "../../Store/generalSlice";
import { useLocation } from "react-router-dom";

function PulseButton({ classStyle = "" }) {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <button
      className={`${
        location.pathname === "/categories"
          ? "bg-lime-50 text-lime-500"
          : "bg-lime-500 text-lime-50"
      }  rounded-full w-16 h-16 drop-shadow-lg  ${classStyle} `}
      onClick={() => dispatch(generalActions.changeModelState())}
    >
      <span className=" absolute -translate-x-1/2 -translate-y-1/2 material-symbols-outlined text-5xl ">
        add
      </span>
    </button>
  );
}

export default PulseButton;
