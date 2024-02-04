import React, { useState } from "react";
import DropItem from "./DropItem";
import { useSelector } from "react-redux";
// import { addModalAction } from "../../Store/addModalSlice";

function DropDown({ itemList }) {
  // Redux
  // const dispatch = useDispatch();
  const category = useSelector((states) => states.account.category);
  // const dropDown = useSelector((states) => states.addModal.dropDown);

  const [dropDown, setDropDown] = useState(false);
  // function alterDropDown
  function alternateDropDown() {
    setDropDown(!dropDown);
  }

  return (
    <button
      type="button"
      onClick={alternateDropDown}
      className=" relative w-full h-9 px-1  border rounded border-lime-300"
    >
      <div className=" flex items-center justify-start">
        <span className="material-symbols-outlined">{category.icon}</span>
        <p className="font-medium ms-1">{category.name}</p>
        {!dropDown ? (
          <span className="material-symbols-outlined ms-auto">expand_more</span>
        ) : (
          <span className="material-symbols-outlined ms-auto">expand_less</span>
        )}
      </div>
      {dropDown && (
        <ul className="absolute z-50 top-full left-0 w-full rounded border divide-y-2 bg-slate-50 divide-slate-100 max-h-52 overflow-y-scroll">
          {itemList.map((item, index) => {
            return <DropItem key={index} category={item} />;
          })}
        </ul>
      )}
    </button>
  );
}

export default DropDown;
