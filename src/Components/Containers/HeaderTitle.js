import React from "react";

function HeaderTitle({ icon = "", title }) {
  return (
    <div className="text-lime-500 mb-2 sm:text-2xl text-xl flex justify-center items-center font-medium pb-2">
      <h2>{title}</h2>
      <span className="material-symbols-outlined sm:text-3xl text-2xl ms-0.5">
        {icon}
      </span>
    </div>
  );
}

export default HeaderTitle;
