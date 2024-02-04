import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function SecondNavItem({ icon, title, path }) {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(path)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.pathname, path]);

  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive
            ? "flex items-center justify-center text-lime-500 col-span-3 sm:col-span-1"
            : "flex items-center justify-center text-slate-400 hover:text-slate-500 col-span-1 sm:col-span-1";
        }}
      >
        <span className="material-symbols-outlined text-xl">{icon}</span>
        {active && <h2 className="ms-1 sm:hidden font-medium">{title}</h2>}
        <h2 className="ms-1 hidden sm:block font-medium">{title}</h2>
      </NavLink>
    </>
  );
}

export default SecondNavItem;
