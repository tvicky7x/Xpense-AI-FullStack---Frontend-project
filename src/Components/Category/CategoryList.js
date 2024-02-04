import React from "react";

function CategoryList({ data, children, active }) {
  return (
    <li
      className={`flex items-center py-2 px-2 text-slate-600 sm:text-lg rounded ${
        active && "bg-lime-100"
      }`}
    >
      <span className="material-symbols-outlined text-lime-500 text-3xl">
        {data.icon}
      </span>
      <p className="font-medium ms-2">{data.name}</p>
      {children}
    </li>
  );
}

export default CategoryList;
