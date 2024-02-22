import React, { forwardRef, useState } from "react";

function InputField(
  {
    children,
    type = "text",
    name,
    req = false,
    minLength = 0,
    defaultValue = "",
  },
  ref
) {
  const [visibility, setVisibility] = useState(false);
  const [passType, setPassType] = useState(type);

  function alterVisibility() {
    setVisibility(!visibility);
    if (!visibility) setPassType("text");
    else setPassType(type);
  }

  return (
    <div className=" space-y-1 mb-1 relative">
      <label htmlFor={children} className=" text-lg">
        {children}
        {req && <span className=" text-red-400">*</span>}
      </label>
      {type === "password" && (
        <div
          className=" absolute top-[2.1rem] right-2 text-slate-400 text-opacity-70"
          onClick={alterVisibility}
        >
          {!visibility && (
            <span className="material-symbols-outlined">visibility</span>
          )}
          {visibility && (
            <span className="material-symbols-outlined">visibility_off</span>
          )}
        </div>
      )}

      <input
        ref={ref}
        required={req}
        type={passType}
        name={name}
        defaultValue={defaultValue}
        minLength={minLength}
        min={1}
        className=" outline-none w-full border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
      />
    </div>
  );
}

export default forwardRef(InputField);
