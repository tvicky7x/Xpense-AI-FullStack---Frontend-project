import React from "react";
import { useSelector } from "react-redux";

function Popup() {
  const popup = useSelector((state) => state.general.popup);
  return (
    <div
      className={` px-3 fixed top-7 left-1/2 -translate-x-1/2 animate-popupAnimation w-full flex justify-center text-center sm:text-lg z-[105]`}
    >
      <div
        className={` px-2 py-1 rounded outline outline-1 drop-shadow-lg ${
          popup.isError
            ? "bg-red-200 outline-red-300"
            : "bg-lime-200 outline-lime-300"
        }`}
      >
        {popup.massage}
      </div>
    </div>
  );
}

export default Popup;
