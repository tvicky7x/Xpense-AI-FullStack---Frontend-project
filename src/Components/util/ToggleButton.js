import React from "react";

function ToggleButton({
  type = "button",
  className,
  onClick = () => {},
  children,
  isActive,
}) {
  const classStyle = " py-1.5 px-4 rounded font-medium " + className;
  return (
    <button
      type={type}
      className={
        isActive
          ? classStyle + " text-lime-500 outline outline-1 outline-lime-500"
          : classStyle + "  text-slate-400"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ToggleButton;
