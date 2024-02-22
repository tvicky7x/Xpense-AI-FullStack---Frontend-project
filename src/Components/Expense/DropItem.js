import React from "react";
import { useDispatch } from "react-redux";
import { accountActions } from "../../Store/accountSlice";
// import { addModalAction } from "../../../../../../FRONTEND/Best Websites/Xpense AI/src/Store/addModalSlice";

function DropItem({ category }) {
  // redux
  const dispatch = useDispatch();
  return (
    <li
      className="px-1  font-medium py-2 hover:bg-lime-300 flex items-center justify-start space-x-1"
      onClick={() => {
        dispatch(accountActions.changeCategory({ category }));
      }}
    >
      <span className="material-symbols-outlined">{category.icon}</span>
      <p>{category.name}</p>
    </li>
  );
}

export default DropItem;
